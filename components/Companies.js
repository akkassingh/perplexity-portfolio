import staticContent from "../data/staticContent";

export default function Companies() {
  return (
    <section className="mb-12 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2 text-center">
        Companies I've Worked At
      </h2>
      <div className="space-y-8">
        {staticContent.companies.map((c) => (
          <div key={c.name} className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6">
            <h3 className="font-semibold text-xl">{c.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 italic">
              {c.role} | {c.duration}
            </p>
            <p className="mt-3">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
