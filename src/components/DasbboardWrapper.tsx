"use client";

import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StoreProvider from "@/store/redux"; // Updated to .tsx if needed

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full bg-gray-50 min-h-screen text-gray-900">
      <div className="">
        <Sidebar />
      </div>
      <main className="dark:bg-dark-bg flex w-full flex-col bg-gray-50 md:pl-64">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;