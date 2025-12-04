// src/pages/Contact.jsx
import React from 'react';
import ContactForm from '../sections/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-[50vh] flex flex-col">
      {/* Hero */}
      <header className="bg-gradient-to-r">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 py-16">
            <div>
              <h1 className="text-2xl sm:text-2xl font-extrabold">Let’s build something that exceeds expectations</h1>
              
            </div>

            
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-20 flex-1 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact details card */}
          <aside className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow">
            <div className="flex items-start gap-4">
               <div>
                <div className="font-semibold"> Contact</div>
                <div className="text-sm mt-1 text-slate-600 dark:text-slate-300">Shilshan Bandara</div>
                <a href="https://www.linkedin.com/in/sachith-shilshan/" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-600 dark:text-teal-300 underline mt-2 inline-block">View LinkedIn</a>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M3 12h18M3 19h18"/></svg>
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+94771123977" className="underline">+94 77 112 3977</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3"/></svg>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <a href="https://wa.me/94771123977" target="_blank" rel="noopener noreferrer" className="underline">chat on whatsapp</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:its.shilshan@gmail.com" className="underline">its.shilshan</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 10-8 0v8a4 4 0 004 4h0a4 4 0 004-4V8z"/></svg>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/sachith-shilshan/" target="_blank" rel="noopener noreferrer" className="underline">shilshan </a>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
              Prefer a demo? Open the live dashboard: <a href="https://sachithshilshan.github.io/xceed/" target="_blank" rel="noopener noreferrer" className="underline">Live demo</a>.
            </div>
          </aside>
        </div>
      </main>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/94771123977"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-50"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg hover:scale-105 transform transition">
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
        </div>
      </a>
    </div>
  );
}
