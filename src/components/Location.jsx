function Location() {
  const locations = [
    {
      name: "Guntur City",
      description: "Easy access to the city",
    },
    {
      name: "Mahatma Gandhi Inner Ring Road",
      description: "Direct road connectivity",
    },
    {
      name: "Inner Ring Road",
      description: "Established residential area",
    },
    {
      name: "Gorantla",
      description: "Well-connected neighbourhood",
    },
  ]

  // Exact project location shared from Google Maps
  const googleMapsUrl =
    "https://maps.app.goo.gl/mMZ89jKNzFMFJ67u8"

  return (
    <section
      id="location"
      className="bg-slate-950 py-24 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            HEADING
        ========================== */}
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Location
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Well connected to
            <span className="block text-lime-400">
              what matters.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Located in the Inner Ring Road–Gorantla area of Guntur,
            with convenient access to surrounding neighbourhoods
            and major road connections.
          </p>

        </div>


        {/* =========================
            LOCATION CONTENT
        ========================== */}
        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] lg:grid-cols-2">


          {/* =========================
              GOOGLE MAP
          ========================== */}
          <div className="relative min-h-[420px] overflow-hidden bg-slate-800">

            <iframe
              title="Aaradya Green Valley location"
              src="https://www.google.com/maps?q=D.no%20132-61-788%2C%20M.G%20Inner%20Ring%20Road%2C%20Phase%201%2C%20Reddy%20pallem%2C%20Guntur%2C%20Andhra%20Pradesh%20522509%2C%20India&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Map Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-slate-950/10" />

            {/* Location Label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-400 text-2xl shadow-2xl shadow-lime-400/30">
                📍
              </div>

              <div className="mt-3 whitespace-nowrap rounded-full bg-slate-950/90 px-5 py-2 text-center text-sm font-semibold text-white backdrop-blur-sm">
                InnerRingRoad, Guntur
              </div>

            </div>

            {/* Map CTA */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Aaradya Green Valley location in Google Maps"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-5 py-3 text-xs font-semibold text-slate-950 shadow-xl backdrop-blur-sm transition hover:bg-lime-400"
            >
              Open in Google Maps →
            </a>

          </div>


          {/* =========================
              INFORMATION
          ========================== */}
          <div className="p-8 sm:p-10 lg:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
              Aaradya Green Valley
            </p>


            <h3 className="mt-4 font-serif text-3xl font-semibold">
              InnerRingRoad, Guntur
            </h3>


            {/* Address */}
            <div className="mt-5 flex gap-3">

              <span className="mt-1 text-lime-400">
                📍
              </span>

              <p className="text-sm leading-7 text-slate-300">
                D.no 132-61-788, 
                <br />
                M.G Inner Ring Road, Phase 1,
                <br />
                Reddy pallem, Guntur,
                <br />
                Andhra Pradesh 522509, India
              </p>

            </div>


            <p className="mt-6 text-sm leading-7 text-slate-400">
              Strategically located within Guntur, the project is
              envisioned to provide convenient access to surrounding
              residential areas, road networks and everyday destinations.
            </p>


            {/* =========================
                LOCATION HIGHLIGHTS
            ========================== */}
            <div className="mt-8 divide-y divide-white/10">

              {locations.map((location) => (
                <div
                  key={location.name}
                  className="flex items-center justify-between gap-4 py-4"
                >

                  <div className="flex items-center gap-3">

                    <span className="text-lg text-lime-400">
                      •
                    </span>

                    <span className="text-sm text-slate-200">
                      {location.name}
                    </span>

                  </div>

                  <span className="text-right text-xs text-slate-500">
                    {location.description}
                  </span>

                </div>
              ))}

            </div>


            {/* =========================
                DIRECTIONS BUTTON
            ========================== */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-lime-400 px-7 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-lime-300 hover:shadow-lg"
            >
              Get Directions

              <span className="ml-3 text-lg">
                →
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Location