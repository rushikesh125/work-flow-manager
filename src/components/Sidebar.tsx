"use client";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const sidebarClassesNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transhition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`;
  return (
    <div className={sidebarClassesNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            ED_LIST
          </div>
        </div>
          <div className="flex items-center justify-center py-2 gap-5 border-y-[1.5px]">
            <Image src="/logo.png" alt="logo" width={50} height={50}/>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
