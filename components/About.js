export default function About() {
  const gravatarUrl = "https://www.gravatar.com/avatar/4cedb69bce8c33e2cf17d290d9a0a1d9?s=200&d=identicon";

  return (
    <section className="mb-12 text-center">
      <img
        src={gravatarUrl}
        alt="Akkas Singh"
        className="w-32 h-32 rounded-full mx-auto mb-6"
      />
      <h1 className="text-4xl font-bold mb-3">Akkas Singh</h1>
      <p className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-300">
        Experienced Software Engineer with a proven track record across leading companies including HCL, Deloitte, BCG, and RBC. Passionate about building scalable applications and delivering impactful solutions.
      </p>
    </section>
  );
}
