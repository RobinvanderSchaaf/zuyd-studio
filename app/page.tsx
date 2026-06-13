import BuiltDifferently from "@/components/sections/BuiltDifferently";
import Hero from "@/components/sections/Hero";
import RecentProjects from "@/components/sections/RecentProjects";
import TrustBar from "@/components/sections/TrustBar";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <BuiltDifferently />
      <RecentProjects />
      <TechStack />
    </main>
  );
}