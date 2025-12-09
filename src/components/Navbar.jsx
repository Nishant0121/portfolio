import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
    return (
        <nav className="flex justify-center items-center p-4 bg-transparent">
            <div className="flex bg-[#e77015] p-1 rounded-full shadow-lg items-center">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-2 text-lg font-medium transition-all px-4 py-2 md:px-6 md:py-2 duration-200 rounded-full ${
                                isActive 
                                    ? 'bg-[#1e1e1e] text-white' 
                                    : 'text-[#050408] hover:text-blue-600'
                            }`
                        }
                    >
                        <item.icon size={20} />
                        <span className="hidden md:block">{item.name}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}