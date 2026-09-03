import { useState } from "react"

const amenities = [
  {
    image: "/images/Crda-Dtcp.jpg",
    title: "CRDA/DTCP Approved Layouts",
    description: "Approved. Planned. Built for Your Future.",
  },
  {
    image: "/images/Compound-wall.jpg",
    title: "Compound Wall",
    description: "Defining Boundaries. Elevating Security.",
  },
  {
    image: "/images/Cc-Roads.jpg",
    title: "CC Roads",
    description: "Strong Roads. Smooth Journeys. Better Living.",
  },
  {
    image: "/images/Ug-Drainage.jpg",
    title: "Under Ground Drainage",
    description:
      "Clean Communities. Healthy Living.",
  },
  {
    image: "/images/Ug-Electricity.jpg",
    title: "Under Ground Electricity",
    description:
      "Safer. Smarter. Beautifully Planned.",
  },
  {
    image: "/images/Public-Parks.jpg",
    title: "Public Parks",
    description:
      "Beautifully planned green spaces for relaxation, recreation and family time.",
  },
]

function Amenities() {
  const [selectedAmenity, setSelectedAmenity] = useState(null)

  return (
    <section
      id="amenities"
      className="bg-slate-950 py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Amenities
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Designed around
            <span className="block text-lime-400">
              the way you live.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            From recreation and fitness to landscaped surroundings and
            family spaces, every detail is thoughtfully planned to make
            everyday living more comfortable.
          </p>

        </div>

        {/* Amenities Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedAmenity(amenity)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  setSelectedAmenity(amenity)
                }
              }}
              className="group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-500 hover:-translate-y-2 hover:border-lime-400/40 hover:bg-white/[0.08]"
            >

              {/* Image / Icon */}
              {amenity.image ? (
                <div className="flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-slate-900">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl transition duration-300 group-hover:bg-lime-400 group-hover:scale-110">
                  {amenity.icon}
                </div>
              )}

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold">
                {amenity.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {amenity.description}
              </p>

              {/* Arrow */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setSelectedAmenity(amenity)
                }}
                className="mt-6 inline-flex items-center text-sm font-semibold text-lime-400"
              >
                Explore
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>
          ))}

        </div>

        {/* Amenity Details Popup */}
        {selectedAmenity && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedAmenity(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedAmenity.title} details`}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-white/10"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setSelectedAmenity(null)}
                aria-label="Close amenity details"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-xl text-white transition hover:bg-lime-400 hover:text-slate-950"
              >
                ×
              </button>

              {/* Large Image */}
              {selectedAmenity.image && (
                <div className="overflow-hidden rounded-t-3xl bg-slate-950">
                  <img
                    src={selectedAmenity.image}
                    alt={selectedAmenity.title}
                    className="max-h-[55vh] w-full object-contain"
                  />
                </div>
              )}

              {/* Details */}
              <div className="p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
                  Aaradya Amenities
                </p>

                <h3 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
                  {selectedAmenity.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  {selectedAmenity.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedAmenity(null)}
                  className="mt-7 rounded-full bg-lime-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Amenities