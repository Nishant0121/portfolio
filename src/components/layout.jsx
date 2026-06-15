import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#050408] dark:bg-gray-900 transition-colors font-sans">
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
