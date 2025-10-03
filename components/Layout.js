import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Akkas Singh - Software Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Akkas Singh, Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className="flex justify-center gap-8 py-4 bg-gray-100 dark:bg-gray-800 sticky top-0 z-50 shadow">
        <Link href="/">Home</Link>
        <Link href="/analytics">Analytics</Link>
      </nav>
      <main className="max-w-5xl mx-auto p-6 min-h-screen">
        {children}
      </main>
    </>
  );
}
