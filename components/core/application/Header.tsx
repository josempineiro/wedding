import React from "react";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row justify-between items-center sticky top-0 h-16 w-full z-10 bg-white">
      <div className="flex flex-row items-center px-4 w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
