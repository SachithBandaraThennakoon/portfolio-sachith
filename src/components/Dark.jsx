import { useEffect } from 'react';

export default function ThemeSwitch() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('xceed-theme', 'dark');
  }, []);

  return (
    <button
      disabled
      className="inline-flex items-center px-3 py-2 rounded-md opacity-60 cursor-not-allowed"
      aria-label="Dark mode enabled"
    >
      <svg
        className="w-5 h-5 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        />
      </svg>
      
    </button>
  );
}
