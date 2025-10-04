import staticContent from "../data/staticContent";

export default function About() {
  const { gravatarUrl, name, summary } = staticContent.about;
  return (
    <section className="mb-12 text-center">
      <img src={gravatarUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-3">{name}</h1>
      <p className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-300">{summary}</p>
    </section>
  );
}
