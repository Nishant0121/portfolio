import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, User, FolderGit2, Mail } from 'lucide-react';
import PillNav from './PillNav';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Projects', path: '/projects', icon: FolderGit2 },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
  const location = useLocation();

  const items = navItems.map((item) => ({
    label: (
      <div className="flex items-center gap-2">
        <item.icon size={20} />
        <span className="block">{item.name}</span>
      </div>
    ),
    href: item.path,
    ariaLabel: item.name,
  }));

  return (
    <nav className="flex justify-center items-center p-4 bg-transparent w-full">
      <PillNav
        items={items}
        activeHref={location.pathname}
        baseColor="#c5ff41"
        hoverColor="#1a1817"
        pillTextColor="#151312"
        hoveredPillTextColor="#c5ff41"
        initialLoadAnimation={true}
      />
    </nav>
  );
}
