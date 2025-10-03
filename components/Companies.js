const companies = [
  {
    name: "HCL",
    role: "Software Developer",
    duration: "Jan 2015 - Dec 2017",
    description: "Worked on enterprise software solutions focused on backend development and automation."
  },
  {
    name: "Deloitte",
    role: "Senior Software Engineer",
    duration: "Jan 2018 - Jun 2020",
    description: "Led development of key consulting applications with emphasis on cloud migration and microservices."
  },
  {
    name: "BCG",
    role: "Technical Lead",
    duration: "Jul 2020 - Dec 2021",
    description: "Spearheaded technical teams building digital transformation platforms leveraging modern stacks."
  },
  {
    name: "RBC",
    role: "Software Lead",
    duration: "Jan 2022 - Present",
    description: "Driving innovation for banking applications with focus on performance, scalability and compliance."
  }
];

export default function Companies() {
  return (
    <section className="mb-12 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2 text-center">
        Companies I've Worked At
      </h2>
      <div className="space-y-8">
        {companies.map((c) => (
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
