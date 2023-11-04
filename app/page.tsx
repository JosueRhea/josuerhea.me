import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <main className="font-sans w-full h-full min-h-screen flex flex-col px-2 pb-20">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}
