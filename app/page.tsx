import About from "@/components/about";
import Projects from "@/components/projects";
import Intro from "../components/intro";
import SectionDivider from "../components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
