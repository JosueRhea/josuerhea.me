import "katex/dist/katex.min.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="font-sans w-full h-full min-h-screen flex flex-col px-2 pb-20">
      <article className="max-w-lg w-full px-2 mx-auto mt-10 prose">
        {children}
      </article>
    </main>
  );
}
