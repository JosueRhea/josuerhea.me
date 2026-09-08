export function Footer() {
  return (
    <footer className="mt-4 flex items-center justify-between border-t border-border pt-8 font-mono text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Josué Alvarenga</span>
      <span className="flex items-center gap-4">
        <a
          href="https://twitter.com/josuerhea"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          Twitter
        </a>
        <a
          href="https://github.com/JosueRhea"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </span>
    </footer>
  );
}
