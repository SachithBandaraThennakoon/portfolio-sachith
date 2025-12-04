// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        

        <nav className="flex gap-4">
          <Link to="/about" className="text-sm hover:underline">About</Link>
          <Link to="/services" className="text-sm hover:underline">Services</Link>
          <Link to="/products" className="text-sm hover:underline">Products</Link>
          <Link to="/portfolio" className="text-sm hover:underline">Portfolio</Link>
          <Link to="/contact" className="text-sm hover:underline">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/sachith-shilshan/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LinkedIn</a>
          <a href="https://www.instagram.com/s_shi_shan?igsh=ejN1Y2xrNDgzNWE1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Instagram</a>
          <a href="https://www.tiktok.com/@sachithshilshan?_r=1&_t=ZS-91sn6wrQHQu" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Tiktok</a>

          <a href="https://www.facebook.com/share/15WsHtZ3gZK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Facebook</a>
          <a href="https://youtube.com/@sachithshilshan?si=Du0Jyz51hRUBhGE3" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">YouTube</a>
          <a href="mailto:its.shilshan@gmail.com" className="text-sm text-slate-600 dark:text-slate-300 underline">Email</a>
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-right">
          <div>© {new Date().getFullYear()} Built by Shilshan B.</div>
          <div className="mt-1">Specialist in BI, Data & AI — <a href="https://www.linkedin.com/in/sachith-shilshan/" target="_blank" rel="noopener noreferrer" className="underline">Connect</a></div>
        </div>
      </div>
    </footer>
  );
}
