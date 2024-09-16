"use client";

import UserProfile from "@/components/nav/user-profile";
import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";
import LabelsList from "@/components/containers/labels";

export default function Labels() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <SideBar />
      <div className="flex flex-col w-full">
        {/* Mobile Navigation */}
        <MobileNav />

        {/* Main Content Area */}
        <main className="flex flex-1 flex-col gap-6 p-4 lg:px-8">
          {/* Heading */}
          <header className="mb-4">
            <h1 className="text-2xl font-semibold text-gray-800">Labels</h1>
            <p className="text-gray-600">
              View the available labels.
            </p>
          </header>

          {/* Labels List Component */}
          <section className="flex flex-col gap-4">
            <LabelsList />
          </section>

          {/* Call to Action Button */}
          <div className="mt-6 flex justify-center">
            
          </div>
        </main>
      </div>
    </div>
  );
}
