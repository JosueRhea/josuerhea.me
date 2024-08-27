export function Header() {
  return (
    <section className="mx-auto w-full max-w-lg mt-10">
      <h1 className="scroll-m-20 text-3xl font-semibold leading-none text-center max-w-xs block mx-auto">
        <span className="underline">Me</span> and my software engineering stuff.
      </h1>
      <a
        href="https://github.com/JosueRhea"
        target="_blank"
        className="text-sm text-muted-foreground underline text-center block mt-2"
      >
        @josuerhea
      </a>
    </section>
  );
}
