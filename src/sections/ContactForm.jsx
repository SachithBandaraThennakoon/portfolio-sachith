// src/sections/ContactForm.jsx
import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let t;
    if (showToast) t = setTimeout(() => setShowToast(false), 6000);
    return () => clearTimeout(t);
  }, [showToast]);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: false, success: '', error: '' });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ ...status, error: 'Please fill name, email and message.' });
      return;
    }

    setStatus((s) => ({ ...s, loading: true }));

    // If configured, send to Formspree endpoint (recommended)
    if (FORMSPREE_ENDPOINT) {
      try {
        const payload = {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          source: 'contact'
        };

        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });

        const json = await res.json();
        if (res.ok) {
          setForm({ name: '', email: '', phone: '', message: '' });
          setStatus({ loading: false, success: 'Thanks — message sent.', error: '' });
          setShowToast(true);
        } else {
          const err = json?.error || (json?.errors && json.errors.map((i) => i.message).join(', ')) || 'Failed to send message.';
          setStatus({ loading: false, success: '', error: err });
        }
      } catch (err) {
        setStatus({ loading: false, success: '', error: 'Network error — try again.' });
      }
      return;
    }

    // Fallback to mailto: open user's email client
    try {
      const subject = encodeURIComponent(`Contact from  site — ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
      window.location.href = `mailto:its.shilshan@gmail.com?subject=${subject}&body=${body}`;
      setStatus({ loading: false, success: 'Mail client opened — send the message from your email app.', error: '' });
      setShowToast(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: 'Unable to open mail client.' });
    }
  };

  return (
    <div>
      <form onSubmit={submit} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Send a message</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Tell us about the project and we'll respond quickly.</p>
          </div>

          
        </div>

        {/* name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="relative">
            <span className="sr-only">Name</span>
            <div className="absolute left-3 top-3 text-slate-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 100-10 5 5 0 000 10zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/></svg>
            </div>
            <input
              value={form.name}
              onChange={update('name')}
              placeholder="Your full name"
              className="pl-11 pr-3 py-3 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </label>

          <label className="relative">
            <span className="sr-only">Email</span>
            <div className="absolute left-3 top-3 text-slate-400">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M3 19h18"/></svg>
            </div>
            <input
              value={form.email}
              onChange={update('email')}
              placeholder="you@company.com"
              type="email"
              className="pl-11 pr-3 py-3 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </label>
        </div>

        {/* phone */}
        <div className="mt-4 relative">
          <div className="absolute left-3 top-3 text-slate-400">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V21a1 1 0 01-1.11 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012 3.11 1 1 0 013 2h4.09a1 1 0 01.99.86c.12 1 .36 2 .71 2.96a1 1 0 01-.24 1l-1.27 1.27a16 16 0 006 6l1.27-1.27a1 1 0 011-.24c.96.35 1.96.59 2.96.71a1 1 0 01.86.99V21z"/></svg>
          </div>
          <input
            value={form.phone}
            onChange={update('phone')}
            placeholder="+94 77 112 3977 (optional)"
            className="pl-11 pr-3 py-3 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        {/* message */}
        <div className="mt-4">
          <textarea
            value={form.message}
            onChange={update('message')}
            placeholder="Describe the project, timeline, budget or ask a question..."
            rows={6}
            className="w-full p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        {/* actions */}
        <div className="mt-4 flex items-center gap-3">
          <button
            type="submit"
            disabled={status.loading}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg shadow font-medium transition-transform ${status.loading ? 'bg-slate-300 text-slate-600 cursor-wait' : 'bg-teal-600 text-white hover:scale-[1.02]'}`}
          >
            {status.loading ? 'Sending…' : 'Send Message'}
          </button>

          <a href="mailto:its.shilshan@gmail.com" className="text-sm text-slate-600 dark:text-slate-300 underline">Or email us directly</a>
        </div>

        {/* status */}
        <div className="mt-3 min-h-[22px]">
          {status.error && <div className="text-sm text-red-600 dark:text-red-300">{status.error}</div>}
          {status.success && <div className="text-sm text-green-600 dark:text-green-300">{status.success}</div>}
        </div>

        {/* owner instructions */}
        
      </form>

      {/* success toast */}
      {showToast && (
        <div className="fixed right-5 top-5 z-50 animate-fade-in">
          <div className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 shadow border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white">✓</div>
              <div>
                <div className="font-semibold">Message sent</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Thanks — we will contact you shortly.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 260ms ease-out; }
      `}</style>
    </div>
  );
}
