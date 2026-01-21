// src/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Hero';
import FeaturesGrid from '../sections/FeaturesGrid';
import ServicesList from '../sections/ServicesList';
import servicesData from '../data/servicesData';
import { Link } from 'react-router-dom';
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  const features = [
    {
      title: 'Business outcomes, not models',
      desc: 'We prioritise measurable KPIs: revenue lift, cost reduction, and faster decision cycles.'
    },
    {
      title: 'Human-centered automation',
      desc: 'Automation that augments teams — reducing busywork while keeping humans in the loop.'
    },
    {
      title: 'Production-ready engineering',
      desc: 'Robust data pipelines and MLOps so solutions run reliably at scale.'
    },
    {
      title: 'Ethics & safety-first research',
      desc: 'Responsible design, privacy-aware data practices and safety reviews for sensitive use cases.'
    }
  ];

  const caseStudies = [
    {
      title: 'Retail Forecasting',
      outcome: '35% fewer stockouts • 12% lower inventory costs',
      desc: 'Demand forecasting and replenishment optimization for a national retail chain.'
    },
    {
      title: 'Invoice Automation',
      outcome: 'Saved 1,200 hours/year',
      desc: 'Intelligent document processing that reduced manual invoice handling and errors.'
    },
    {
      title: 'CFO Dashboards',
      outcome: 'Real-time finance KPIs across 10 countries',
      desc: 'Unified BI platform that replaced fragmented spreadsheets and manual reporting.'
    }
  ];

  const process = [
    { step: 'Discover', desc: 'Identify high-impact use cases with measurable success criteria.' },
    { step: 'Build', desc: 'Rapid prototyping, iterate with users, validate with real data.' },
    { step: 'Scale', desc: 'Productionize, monitor and continuously optimize.' }
  ];

  return (
    <div>
      <Hero
        title={
          <div className="flex flex-col gap-3">
            {/* Main title */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              Empowering Humans & Businesses to{" "}
              <span className="text-emerald-600">Exceed</span>
            </h1>

            {/* Domain badge */}
            <a
              href="https://xceed.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full
                   text-emerald-700 text-sm font-semibold
                   border border-emerald-200
                   transition-all"
            >
              🌐 xceed.live
              <span className="text-xs opacity-70">Official Platform</span>
            </a>
          </div>
        }
        subtitle="Helping people and companies go beyond their limits using smart, innovative solutions."
        cta={{ text: "Talk to an Expert", href: "/contact" }}
      />

  {/* existing home content */}
  <ChatWidget />

      {/* Trust strip */}


      {/* Feature grid */}
      <FeaturesGrid features={features} />

      {/* Featured solution */}


      {/* Services preview */}
      <ServicesList data={servicesData} />

      {/* Case studies */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Selected Outcomes</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Real projects, measurable impact.</p>
            </div>
            <div>
              <Link to="/portfolio" className="text-sm text-teal-600 dark:text-teal-300 font-medium">View all case studies →</Link>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.title} className="p-6 rounded-lg border bg-white dark:bg-slate-800">
                <div className="text-sm text-slate-500 dark:text-slate-400">{c.title}</div>
                <div className="font-semibold mt-2">{c.outcome}</div>
                <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">{c.desc}</div>
                <div className="mt-4">
                  <Link to="/portfolio" className="text-sm text-teal-600 dark:text-teal-300">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">How we work</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">A short, pragmatic process to go from idea to impact.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="p-6 rounded-lg border bg-white dark:bg-slate-800">
                <div className="text-teal-600 font-bold">{p.step}</div>
                <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Ready to exceed?</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Book a call and we'll help you identify the highest-value opportunities in your business.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-teal-600 text-white font-medium shadow">Talk to an Expert</Link>
            <Link to="/portfolio" className="inline-flex items-center px-6 py-3 rounded-lg border">See case studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
