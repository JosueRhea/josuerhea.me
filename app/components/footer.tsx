export function Footer() {
  return (
    <div className="w-full max-w-md mx-auto text-center mt-4">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Follow me on{" "}
        <a
          href="https://twitter.com/josuerhea"
          className="underline font-semibold"
          target="_blank"
        >
          Twitter
        </a>{" "}
        or see more of my code on{" "}
        <a
          href="https://github.com/JosueRhea"
          className="underline font-semibold"
          target="_blank"
        >
          Github
        </a>
      </p>
    </div>
  );
}
