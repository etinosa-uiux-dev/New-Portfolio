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
    name: "Project Two",
    description:
      "A responsive web interface focused on visual hierarchy, smooth interactions and a seamless user experience.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/images/project-2.jpg",
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
              key={project.number}
              className="group overflow-hidden rounded-[28px] border border-white/[0.06] bg-neutral-900/60 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/20"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                {/* Project number */}
                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs backdrop-blur-md">
                  {project.number}
                </span>

                {/* Arrow */}
                <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  ↗
                </span>
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
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-neutral-400"
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