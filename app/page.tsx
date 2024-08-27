import { Header } from "./components/header";
import { Life } from "./components/life";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="font-sans w-full h-full min-h-screen flex flex-col px-4 pb-20">
      <Header />
      <Life />
      {/* <Posts /> */}
      {/* <Projects /> */}
      {/* <Footer /> */}
    </main>
  );
}
