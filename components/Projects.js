import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/github")
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(() => setError("Failed to load projects."));
  }, []);

  return (
    <section className="mb-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2 text-center">
        Projects
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded shadow-md p-5 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{repo.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{repo.description || "No description"}</p>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">{repo.language}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
