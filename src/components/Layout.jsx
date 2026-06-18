import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#151312] dark:bg-[#151312] transition-colors font-sans">
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
