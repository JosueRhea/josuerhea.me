export function Header() {
  return (
    <section className="mx-auto w-full max-w-lg mt-10">
      <h1 className="scroll-m-20 text-2xl font-semibold leading-none">
        Josué A.
      </h1>
      <a href="" className="text-sm text-muted-foreground">@josuerhea</a>
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
