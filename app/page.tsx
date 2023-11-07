import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Posts } from "./components/posts";
import { Projects } from "./components/projects";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="font-sans w-full h-full min-h-screen flex flex-col px-2 pb-20">
      <Header />
      <Posts />
      <Projects />
      <Footer />
    </main>
  );
}
