import { About } from "./components/about";
import { Call } from "./components/call";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Life } from "./components/life";
import { Posts } from "./components/posts";
import { Projects } from "./components/projects";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="font-sans w-full h-full min-h-screen flex flex-col pb-20 px-4 sm:px-0">
      <Header />
      <Life />
      <About />
      <Posts />
      <Projects />
      <Call />
      <Footer />
    </main>
  );
}
