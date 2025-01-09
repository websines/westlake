import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-3xl md:text-6xl 
       font-semibold
        max-w-7xl 
        mx-auto 
        md:text-center 
        relative
         z-20 
         bg-clip-text
          text-transparent bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-neutral-800 dark:via-white dark:to-white"
      >
        {/* Elevate your brand with <br /> <Cover>IT Services</Cover> */}
        Elevate your brand with <br /> IT Services
      </h1>
    </div>
  );
}
