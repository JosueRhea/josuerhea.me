const socials = [
  { label: "GitHub", href: "https://github.com/JosueRhea" },
  { label: "Twitter", href: "https://twitter.com/josuerhea" },
  { label: "Email", href: "mailto:hi@josuerhea.me" },
];

export function Hero() {
  return (
    <header className="flex flex-col">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        @josuerhea
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Josué Alvarenga
      </h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
        Software engineer designing and building products for the web and
        mobile.
      </p>
      <nav className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
