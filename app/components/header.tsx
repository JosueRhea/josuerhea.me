export function Header() {
  return (
    <section className="mx-auto w-full max-w-lg mt-10">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Josué A.
      </h1>
      <p className="text-sm text-muted-foreground">@josuerhea</p>
      <p className="leading-7">
        I work as{" "}
        <span className="text-muted-foreground italic">
          &quot;Software Engineer&quot;{" "}
        </span>{" "}
        at <span className="text-muted-foreground">your heart</span>.
      </p>
    </section>
  );
}
