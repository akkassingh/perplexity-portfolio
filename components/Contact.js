import staticContent from "../data/staticContent";

export default function Contact() {
  return (
    <section className="mb-12 max-w-md mx-auto text-center space-y-3">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p>Email: <a href={`mailto:${staticContent.contact.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{staticContent.contact.email}</a></p>
      <p>LinkedIn: <a href={staticContent.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{staticContent.contact.linkedin.replace("https://", "")}</a></p>
    </section>
  );
}
