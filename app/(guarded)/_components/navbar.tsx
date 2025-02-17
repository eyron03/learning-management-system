"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {

  return (
    <nav className="flex w-full items-center px-2 sm:px-2 md:px-6 py-2.5 border-gray-300 border-b bg-white sticky top-0">
      <div className="flex items-center w-full">
        <div className="flex w-full items-center gap-4 sm:gap-4 md:gap-6 h-full">
          <SidebarTrigger />
          <span className="font-light text-sm text-gray-600 truncate">workspace</span>
        </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
