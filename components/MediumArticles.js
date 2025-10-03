import { useEffect, useState } from "react";

export default function MediumArticles() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/medium")
      .then(res => res.json())
      .then(data => setArticles(data.slice(0,5)))
      .catch(() => setError("Failed to load articles."));
  }, []);

  return (
    <section className="mb-12 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2 text-center">
        Latest Medium Articles
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="space-y-6">
        {articles.map(article => (
          <a
            key={article.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded shadow-md p-5 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{new Date(article.pubDate).toLocaleDateString()}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
