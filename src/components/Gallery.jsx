const galleryImages = [
  {
    image: "/images/project-2.jpg",
    title: "Aaradya Green Valley",
    category: "Community",
  },
  {
    image: "/images/project-1.jpg",
    title: "Modern Commercial",
    category: "Architecture",
  },
  {
    image: "/images/project-3.jpg",
    title: "Green Spaces",
    category: "Landscape",
  },
  {
    image: "/images/project-2-2.jpg",
    title: "Community Lifestyle",
    category: "Lifestyle",
  },
  {
    image: "/images/project-3-3.jpg",
    title: "Thoughtful Planning",
    category: "Development",
  },
]

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
              Gallery
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              See the vision.
              <span className="block text-lime-600">
                Imagine the lifestyle.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            Explore a glimpse of the architecture, landscapes and
            lifestyle envisioned for Aaradya Green Valley.
          </p>

        </div>

        {/* Gallery */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">

          {galleryImages.map((item, index) => (
            <div
              key={item.image}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0
                  ? "md:row-span-2 md:h-[620px]"
                  : "h-[300px]"
              }`}
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
                  {item.category}
                </p>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Gallery