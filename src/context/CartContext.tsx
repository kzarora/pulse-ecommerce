"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import type { Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD"; product: Product; quantity: number }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

const STORAGE_KEY = "arora-cart";

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find(
        (item) => item.product.id === action.product.id
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + action.quantity }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { product: action.product, quantity: action.quantity }],
      };
    }
    case "REMOVE":
      return { items: state.items.filter((item) => item.product.id !== action.id) };
    case "SET_QUANTITY":
      return {
        items: state.items
          .map((item) =>
            item.product.id === action.id
              ? { ...item, quantity: Math.max(0, action.quantity) }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "CLEAR":
      return { items: [] };
    case "HYDRATE":
      return { items: action.items };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        dispatch({ type: "HYDRATE", items: JSON.parse(stored) as CartItem[] });
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = useCallback(
    (product: Product, quantity = 1) => dispatch({ type: "ADD", product, quantity }),
    []
  );
  const removeItem = useCallback((id: string) => dispatch({ type: "REMOVE", id }), []);
  const setQuantity = useCallback(
    (id: string, quantity: number) => dispatch({ type: "SET_QUANTITY", id, quantity }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const itemCount = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );
  const subtotal = useMemo(
    () =>
      state.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      ),
    [state.items]
  );

  const value = useMemo(
    () => ({
      items: state.items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
    }),
    [state.items, itemCount, subtotal, addItem, removeItem, setQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
