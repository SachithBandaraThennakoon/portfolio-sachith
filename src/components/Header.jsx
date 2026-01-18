import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 ' +
      (isActive ? 'bg-slate-100 dark:bg-slate-800' : '')
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ height: '80px' }}
      className="fixed inset-x-0 top-0.5 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          
          <nav className="hidden lg:flex items-center space-x-3">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>

            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
                Services ▾
              </button>

              <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all pointer-events-none group-hover:pointer-events-auto">
                <div className="p-4 grid grid-cols-1 gap-3">
                  <Link to="/services/ai" className="block text-sm font-semibold hover:underline">Artificial Intelligence</Link>
                  <Link to="/services/data-engineering" className="block text-sm font-semibold hover:underline">Data Engineering & Platform</Link>
                  <Link to="/services/bi" className="block text-sm font-semibold hover:underline">Business Intelligence</Link>
                  <Link to="/services/automation" className="block text-sm font-semibold hover:underline">Automation & Digital Ops</Link>
                  <Link to="/services/research" className="block text-sm font-semibold hover:underline">Research & Strategy</Link>
                  <Link to="/services/robotics" className="block text-sm font-semibold hover:underline">Robotics & Bionics</Link>
                </div>
              </div>
            </div>

            <NavItem to="/products">Products</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="/ai-consultant">AIConsultant</NavItem>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden inline-flex items-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`lg:hidden ${open ? 'block' : 'hidden'} bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800`}>
        <div className="px-4 py-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
          <details className="group">
            <summary className="cursor-pointer px-3 py-2">Services</summary>
            <div className="pl-4">
              <Link to="/services/ai" className="block px-3 py-2">Artificial Intelligence</Link>
              <Link to="/services/data-engineering" className="block px-3 py-2">Data Engineering</Link>
              <Link to="/services/bi" className="block px-3 py-2">BI & Dashboards</Link>
              <Link to="/services/automation" className="block px-3 py-2">Automation</Link>
              <Link to="/services/research" className="block px-3 py-2">Research & Strategy</Link>
              <Link to="/services/robotics" className="block px-3 py-2">Robotics & Bionics</Link>
            </div>
          </details>

          <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium">Products</Link>
          <Link to="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          <Link to="/ai-consultant" className="block px-3 py-2 rounded-md text-base font-medium">AIConsultant</Link>
        </div>
      </div>
    </header>
  );
}
