import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
    return (
        <div className='bg-[#1e1e1e] min-h-screen text-white flex flex-col'>
            {/* Navbar for large screens - appears at the top */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* Main content area, padding-bottom to account for fixed bottom navbar on small screens */}
            <main className="flex-grow md:pb-0 pb-[5rem]">
                <Outlet />
            </main>

            {/* Navbar for small screens - fixed at the bottom */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden w-full">
                <Navbar />
            </div>
        </div>
    );
}
