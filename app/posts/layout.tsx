import "katex/dist/katex.min.css";
import { ReactNode } from "react";
import glob from "fast-glob";
import { Footer } from "../components/footer";

interface Props {
  children: ReactNode;
  params: any;
}

export const dynamic = "force-static";

export default async function Layout({ children }: Props) {

  return (
    <main className="font-sans w-full h-full min-h-screen flex flex-col px-2 pb-20">
      <article className="max-w-lg w-full px-2 mx-auto mt-10">
        <div className="w-full prose">{children}</div>
      </article>
      <Footer />
    </main>
  );
}
