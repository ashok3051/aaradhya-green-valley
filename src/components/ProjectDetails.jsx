import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { projects } from "./Projects"

function ProjectDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [])

  const project = projects.find(
    (item) => item.slug === slug
  )

  /* Project not found */
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="text-center">

          <h1 className="font-serif text-4xl font-semibold text-slate-950">
            Project Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-400"
          >
            Back to Home
          </Link>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">

       <div className="relative w-full bg-slate-950">

  <img
    src={project.images[0]}
    alt={project.name}
    className="block h-auto w-full object-contain"
  />

          {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">

              <span className="inline-flex rounded-full bg-lime-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950">
                {project.type}
              </span>

              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold text-white sm:text-6xl">
                {project.name}
              </h1>

              <p className="mt-4 text-lg text-slate-200">
                {project.location}
              </p>

            </div>
          </div>

        </div>

      </section>


      {/* PROJECT INFORMATION */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[1fr_350px]">

            {/* MAIN CONTENT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
                About the Project
              </p>

              <h2 className="mt-4 font-serif text-4xl font-semibold text-slate-950">
                {project.name}
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {project.description}
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Designed with thoughtful planning, modern architecture,
                comfortable spaces and long-term value in mind, this
                development offers a carefully considered environment
                for modern living.
              </p>

            </div>


            {/* PROJECT DETAILS CARD */}
            <div className="h-fit rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">

              <h3 className="font-serif text-2xl font-semibold text-slate-950">
                Project Details
              </h3>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Project
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    {project.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    {project.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Type
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    {project.type}
                  </p>
                </div>

              </div>

              <a
  href="/contact"
  className="mt-8 flex w-full items-center justify-center rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-400"
>
  Enquire Now
</a>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECT GALLERY */}
      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
              Project Gallery
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold text-slate-950">
              Explore the project.
            </h2>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2">

            {project.images.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-3xl ${
                  index === 0
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${project.name} gallery ${index + 1}`}
                  className={`w-full object-cover transition duration-700 hover:scale-105 ${
                    index === 0
                      ? "h-[500px]"
                      : "h-[350px]"
                  }`}
                />
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-slate-950 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Interested in this project?
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
            Let's help you find the right space.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Get in touch with our team to know more about this project,
            availability and further details.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            {/* Go to the dedicated Contact page */}
            <Link
              to="/contact"
              className="rounded-full bg-lime-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-lime-400"
            >
              Contact Us
            </Link>

            {/* Go back to the Projects section on the Home page */}
            <button
              type="button"
              onClick={() => {
                navigate("/#projects")
              }}
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to Projects
            </button>

          </div>

        </div>

      </section>

    </div>
  )
}

export default ProjectDetails