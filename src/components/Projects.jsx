import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const projects = [
  {
    name: "SRI CHAITANYA TECHNO SCHOOL",
    slug: "sri-chaitanya-techno-school",
    location: "Guntur, Andhra Pradesh",
    type: "School",
    images: [
      "/images/project-1.jpg",
      "/images/project-1-2.jpg",
      "/images/project-1-3.jpg",
      "/images/project-1-4.jpg",
    ],
    description:
      "A thoughtfully planned school designed around greenery, comfortable space and long-term value.",
  },

  {
    name: "SAPTHAGIRI ENCLAVE",
    slug: "sapthagiri-enclave",
    location: "Guntur, Andhra Pradesh",
    type: "Premium Apartments",
    images: [
      "/images/project-2.jpg",
      "/images/project-2-2.jpg",
      "/images/project-2-3.jpg",
      "/images/project-2-4.jpg",
    ],
    description:
  "Where Comfort Meets Contemporary Living. Discover thoughtfully designed homes in a modern residential community that brings together elegant architecture, spacious living, natural surroundings, and everyday convenience."
  },

  {
    name: "CHANDANA PRIME CASTLE",
    slug: "CHANDANA-PRIME-CASTLE",
    location: "Guntur, Andhra Pradesh",
    type: "Residential Development",
    images: [
      "/images/project-3.jpg",
      "/images/project-3-2.jpg",
      "/images/project-3-3.jpg",
      "/images/project-3-4.jpg",
    ],
    description:
      "A thoughtfully designed residential community offering modern living spaces, quality construction, and a comfortable lifestyle in a well-planned environment.",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
            Our Projects
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Spaces designed for
            <span className="block text-lime-600">
              better living.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Explore thoughtfully planned residential communities
            created with modern living, greenery and long-term value
            in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0)

  /* Automatic slideshow */
  useEffect(() => {
    if (project.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1
          ? 0
          : prev + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [project.images.length])

  /* Previous image */
  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0
        ? project.images.length - 1
        : prev - 1
    )
  }

  /* Next image */
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1
        ? 0
        : prev + 1
    )
  }

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* IMAGE SLIDESHOW */}
      <div className="relative h-72 overflow-hidden">

        {project.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${project.name} ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
              index === currentImage
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Previous */}
        {project.images.length > 1 && (
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-xl text-white backdrop-blur-sm transition hover:bg-lime-500 hover:text-slate-950"
          >
            ←
          </button>
        )}

        {/* Next */}
        {project.images.length > 1 && (
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-xl text-white backdrop-blur-sm transition hover:bg-lime-500 hover:text-slate-950"
          >
            →
          </button>
        )}

        {/* Project Type */}
        <div className="absolute bottom-5 left-5 z-10">
          <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900">
            {project.type}
          </span>
        </div>

        {/* Slider Dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-5 right-5 z-10 flex items-center gap-1.5">
            {project.images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImage(index)}
                aria-label={`Show image ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "w-6 bg-lime-400"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-7">

        <h3 className="font-serif text-2xl font-semibold text-slate-950">
          {project.name}
        </h3>

        <p className="mt-2 text-sm font-medium text-lime-600">
          {project.location}
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {project.description}
        </p>

        {/* VIEW PROJECT */}
        <Link
          to={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center text-sm font-semibold text-slate-950 transition hover:text-lime-600"
        >
          View Project

          <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>
    </article>
  )
}

export default Projects