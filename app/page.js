import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";
import './globals.css';
import SkillTest from "@/components/Layout/Skilltest";
// import SkillTest from "./pages/skilltest";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div>
      <Navbar/>
      </div>
      <div className="pt-100">
      <Sidebar/>
      </div>
      <main className="flex-1 pt-16 lg:pl-64">
      <div className="p-4">
          <h1 className="text-3xl font-bold">Skill Test</h1>
          <div>
            <SkillTest/>
          </div>
        </div>
      </main>
    </div>
  );
}
