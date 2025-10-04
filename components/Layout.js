import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(saved === "true");
    else setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Akkas Singh - Software Engineer Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="flex justify-center gap-8 py-4 bg-gray-100 dark:bg-gray-800 sticky top-0 z-50 shadow">
        <Link href="/">Home</Link>
        <Link href="/analytics">Analytics</Link>
      </nav>

      {/* Dark mode toggle icon - fixed, below nav bar */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
        className="fixed top-16 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md z-[100]"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m8.66-9H20m-16 0H4m14.14-5.14l-.7.7M7.56 16.42l-.7.7m12.02 0l-.7-.7M7.56 7.58l-.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
        )}
      </button>

      <main className="max-w-5xl mx-auto p-6">{children}</main>
    </>
  );
}
