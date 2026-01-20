import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import DarkHeader from '../components/DarkHeader';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  const location = useLocation();

  const isAIConsultant = location.pathname === '/ai-consultant';
  

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Header switch */}
      {isAIConsultant ? <DarkHeader /> : <Header />}

      <main
        className={`flex-1 ${
          !isAIConsultant ? 'mt-[var(--header-height,72px)]' : ''
        }`}
      >
        {children}
      </main>

      {/* Footer (optional) */}
      {!isAIConsultant && <Footer />}
    </div>
  );
}
