import { About } from "./components/about";
import { Activity } from "./components/activity";
import { Call } from "./components/call";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Life } from "./components/life";
import { Posts } from "./components/posts";
import { Projects } from "./components/projects";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="font-sans min-h-screen w-full px-6 sm:px-8">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-16 py-20 sm:gap-20 sm:py-28">
        <Hero />
        <About />
        <Life />
        <Activity />
        <Projects />
        <Posts />
        <Call />
        <Footer />
      </div>
    </main>
  );
}
