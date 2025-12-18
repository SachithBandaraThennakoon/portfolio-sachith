// src/pages/Portfolio.jsx
import React from 'react';

const projects = [
  {
    title: 'End-to-End Development: AI-Based Coupon Redemption Prediction System',
    url: 'https://github.com/SachithBandaraThennakoon/End-to-End-Development-AI-Based-Coupon-Redemption-Prediction-System'
  },
  { title: 'AI tweet classification (BERT + LSTM)', url: 'https://github.com/SachithBandaraThennakoon/AI-tweet-classification-BERT-LSTM' },
  { title: 'PDF-to-CSV Converter', url: 'https://github.com/SachithBandaraThennakoon/PDF-to-CSV-Converter' },
  { title: 'Costing Template Automate', url: 'https://github.com/SachithBandaraThennakoon/Costing-Template-Automate' },
  { title: 'Predicting Earning Per Hour (EPH)', url: 'https://github.com/SachithBandaraThennakoon/Predicting-Earning-Per-Hour' },
  { title: 'Data Transformation (PowerQuery & R script)', url: 'https://github.com/SachithBandaraThennakoon/Data-Transformation-Using-PowerQuery-And-Rscript' },
  { title: 'AI-Powered Chatbot Integration (Business Operations)', url: 'https://github.com/SachithBandaraThennakoon/Optimizing-Business-Operations-with-AI-Powered-Chatbot-Integration' },
  { title: 'Optimizing Workflow Automation', url: 'https://github.com/SachithBandaraThennakoon/Optimizing-Workflow-Automation' }
];

const articles = [
  {
    title: 'My AI Fighter Predicts Moves 0.07s Ahead — Will Combat & Military Strategy Evolve… or End? — Time Weapon ?',
    url: 'https://www.linkedin.com/pulse/my-ai-fighter-predicts-moves-007s-ahead-combat-evolve-shi-shan--cjqfc/'
  },
  {
    title: 'Build an AI System to Recognize Human Activities',
    url: 'https://www.linkedin.com/pulse/build-ai-system-recognize-human-activities-shi-shan--ax7sc/'
  },
  {
    title: 'Martial Arts Pose Detection Using Artificial Intelligence : Identifying Opponent Weak Points',
    url: 'https://www.linkedin.com/pulse/martial-arts-pose-detection-using-ai-identifying-weak-shilshan-d1mqc/'
  }
];

export default function Portfolio() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-bold">Portfolio & Projects</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Selected projects, code and articles demonstrating practical AI, BI and automation work.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold">Projects (GitHub)</h2>
            <ul className="mt-4 space-y-3">
              {projects.map((p) => (
                <li key={p.url} className="p-4 rounded-lg border bg-white dark:bg-slate-800">
                  <div className="font-semibold">{p.title}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</div>
                  <div className="mt-3">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-300 underline">
                      View on GitHub →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Articles & Write-ups</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Thought leadership pieces and technical write-ups.</p>
            <ul className="mt-4 space-y-3">
              {articles.map((a) => (
                <li key={a.url} className="p-4 rounded-lg border bg-white dark:bg-slate-800">
                  <div className="font-semibold">{a.title}</div>
                  <div className="mt-3">
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-300 underline">
                      Read on LinkedIn →
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a href="https://xceed-global.github.io/xceed-analytics/#/departments/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-teal-600 text-white">
                Open live dashboard demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
