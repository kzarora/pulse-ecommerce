export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-white dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-foreground/60 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-xs font-semibold text-white">
            P
          </span>
          <span className="font-medium text-foreground">Arora</span>
        </div>
        <p>© {new Date().getFullYear()} Arora Store. Crafted with Next.js & React.</p>
        <p>This website is a demo project for learning purposes.</p>
      </div>
    </footer>
  );
}
