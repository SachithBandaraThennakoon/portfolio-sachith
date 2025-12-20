// src/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/photo.jpg'; // ensure file exists here

export default function Hero({
  title = 'Data, AI & Automation',
  subtitle = 'Practical AI, scalable data engineering, and automation that deliver measurable business impact.',
  cta = { text: 'Get Started', href: '/contact' }
}) {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 pb-16">
      {/* MAIN HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {title}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{subtitle}</p>
            <div className="mt-6 flex items-center gap-4">
              {/* Use Link for client-side routing so path stays "/contact" */}
              <Link
                to={cta.href}
                className="inline-flex items-center px-5 py-3 rounded-lg bg-teal-500 text-white font-medium shadow hover:opacity-95"
              >
                {cta.text}
              </Link>

              <a
                href="/#services"
                className="text-sm text-slate-600 dark:text-slate-300 hover:underline"
              >
                Explore services →
              </a>
            </div>
          </div>

          {/* Right side hero illustration box */}
          {/* Right side hero illustration box */}
          <div>
            <div className="w-full h-auto py-6 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-slate-800 dark:to-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-700 dark:text-slate-200">

              <img
      src={profilePic}
      alt="Sachith Bandara"
      className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-white dark:border-slate-700"
    />

              {/* Name */}
              <div className="text-xl font-bold mt-3 text-center">
                Sachith Bandara Thennakoon
              </div>

              {/* Title */}
              <div className="text-sm opacity-80 text-center">
                Data Science & AI | Automation | Business Intelligence
              </div>

              {/* Divider */}
              <div className="w-20 h-[1px] bg-slate-400 dark:bg-slate-500 my-4"></div>

              {/* Description */}
              <div className="text-center px-6 text-sm">
                Empowering businesses with data-driven automation, intelligent systems,
                and scalable AI engineering solutions.
              </div>

              {/* Contact Details */}

              <div className="flex-1 min-w-0">


                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="mailto:hello-xceed@outlook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-green-50 dark:bg-green-900/20 text-blue-400 dark:text-blue-200 px-2 py-1 rounded-full border border-green-100 dark:border-blue-700"
                  >
                    Email
                  </a>

                  <a
                    href="tel:+94771123977"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-green-50 dark:bg-green-900/20 text-red-400 dark:text-red-100 px-2 py-1 rounded-full border border-green-100 dark:border-red-300"
                  >
                    Phone
                  </a>
                  <a
                    href="https://wa.me/94771123977"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-full border border-green-100 dark:border-green-800"
                  >
                    WhatsApp
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sachithbandarathennakoon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-slate-50 dark:bg-slate-900/20 text-teal-600 dark:text-teal-300 px-2 py-1 rounded-full border border-slate-100 dark:border-teal-800"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>

      {/* FEATURED SOLUTION ADDED HERE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold">⭐ Featured Solution — Data & Dashboard Management System</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Explore the complete BI and data management platform created by XCEED —
                featuring role-based dashboards, data pipelines, and real-time Power BI
                integrations.
              </p>

              <ul className="mt-4 text-sm space-y-2 text-slate-700 dark:text-slate-200">
                <li>• End-to-end dashboard & reporting workflows</li>
                <li>• Integrated Power BI live analytics</li>
                <li>• Department-wise role dashboards</li>
                <li>• Data Management</li>
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://xceed-global.github.io/xceed-analytics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-teal-600 text-white"
                >
                  Open Demo
                </a>

                <a
                  href="https://xceed-global.github.io/xceed-analytics/#/departments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600"
                >
                  Power BI Dashboards
                </a>

                <Link
                  to="/portfolio"
                  className="text-sm text-teal-600 dark:text-teal-300 font-medium"
                >
                  View related projects →
                </Link>
              </div>
            </div>

            {/* Small right-side info */}

          </div>
        </div>
      </div>
    </section>
  );
}
