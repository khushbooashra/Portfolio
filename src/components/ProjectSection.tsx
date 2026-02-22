import portfolioData from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          Projects
        </h3>

        {portfolioData.projects.items.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-blue-600"
          >
            <h4 className="text-xl font-semibold mb-2">
              {project.title}
            </h4>
            <p className="text-gray-700 mb-3">
            {project.intro}
            </p>
            <ul className="list-decimal ml-6 text-gray-700 mb-4 space-y-1">
            {project.description.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
            </ul>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {project.year}
              </span>

              <a
                href={project.file}
                download
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}