const projects = [
  {
    number: "01",
    name: "Project One",
    description:
      "A clean digital experience designed to make information simple, intuitive and enjoyable to explore.",
    technologies: ["React", "Tailwind CSS", "Figma"],
    image: "/images/project-1.jpg",
  },
  {
    number: "02",
    name: "Easy Exams",
    description:
      "Design of a simple Computer-based exam interface.",
    technologies: ["Figma", "UI/UX"],
    image: "/images/project-2.jpg",
    type: "figma",
    link: "https://www.figma.com/proto/UKxa4TJk5160BK6ppsn5l0/Easy-Exams?node-id=0-1&t=jtWrsuxyvFanveaL-1",
    githubLink: null,
  },
  {
    number: "03",
    name: "Project Three",
    description:
      "A modern interface built from concept to implementation with attention to detail across every screen.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-3.jpg",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-neutral-950 px-5 py-32 text-white sm:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section intro */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-500">
              Selected work
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Things I've
              <br />
              designed & built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-neutral-500 md:text-right">
            A collection of interfaces, ideas and products I've
            brought from concept to screen.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              className="group overflow-hidden rounded-[28px] border border-white/6 bg-neutral-900/60 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/20"
            >

              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-neutral-800">
                
                {/* Blurred background */}
                <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
                />

                {/* Actual image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-70" />

                {/* Project number */}
                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs backdrop-blur-md">
                  {project.number}
                </span>

                {/* Arrow */}
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name}`}
                className="absolute z-20 bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white">
                  ↗
                </a>

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="absolute z-20 bottom-5 right-18 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.93 10.93 0 0 1 12 6.09c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.08.77 2.18v3.23c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl font-medium tracking-tight">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/8 px-3 py-1.5 text-[11px] text-neutral-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom detail */}
        <div className="mt-16 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-700">
          <span className="h-px w-8 bg-neutral-800" />
          More to come
          <span className="h-px w-8 bg-neutral-800" />
        </div>

      </div>
    </section>
  );
};

export default Projects;