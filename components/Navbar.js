import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 py-4 bg-gray-100 dark:bg-gray-800">
      <Link href="/">
        Home
      </Link>
      <Link href="/analytics">
        Analytics
      </Link>
    </nav>
  );
}
