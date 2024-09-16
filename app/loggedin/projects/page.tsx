import UserProfile from "@/components/nav/user-profile";
import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";
import TodoList from "@/components/todos/todo-list";
import Today from "@/components/containers/today";
import ProjectList from "@/components/containers/projects";

export default function Projects() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <MobileNav />

        <main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
          <ProjectList />
        </main>
      </div>
    </div>
  );
}
