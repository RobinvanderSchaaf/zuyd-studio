import BuiltDifferently from "@/components/sections/BuiltDifferently";
import Hero from "@/components/sections/Hero";
import RecentProjects from "@/components/sections/RecentProjects";
import TrustBar from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <BuiltDifferently />
      <RecentProjects />
    </main>
  );
}