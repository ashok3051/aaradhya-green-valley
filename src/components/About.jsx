

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* =========================
              IMAGE SIDE
          ========================== */}
          <div>

            {/* Main Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/about.jpg"
                alt="Aaradya Green Valley community"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
              />
            </div>

            {/* Information Card - BELOW IMAGE */}
            <div className="mt-5 rounded-2xl bg-slate-950 p-6 shadow-xl">

              <div className="flex items-center justify-between gap-6">

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-lime-400">
                    Aaradya
                  </p>

                  <p className="mt-2 font-serif text-2xl text-white">
                    Green Valley
                  </p>
                </div>

                <div className="hidden h-12 w-px bg-white/20 sm:block" />

                <p className="max-w-xs text-sm leading-6 text-slate-400">
                  A vision for better living, surrounded by nature.
                </p>

              </div>

            </div>

          </div>


          {/* =========================
              CONTENT SIDE
          ========================== */}
          <div>

            {/* Section Label */}
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
              About Aaradya Green Valley
            </p>


            {/* Heading */}
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Where nature meets

              <span className="block text-lime-600">
                thoughtful living.
              </span>
            </h2>


            {/* Description */}
            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">

              <p>
                Aaradya Green Valley is envisioned as a thoughtfully
                planned residential destination created for people who
                appreciate open spaces, greenery and a sense of community.
              </p>

              <p>
                Designed around the idea of comfortable and connected
                living, the community brings together modern planning,
                landscaped surroundings and spaces designed for families
                to enjoy.
              </p>

              <p>
                Whether you are looking to build your dream home or
                looking for a place with long-term potential, Aaradya
                Green Valley is designed around a simple idea —
                <span className="font-semibold text-slate-900">
                  {" "}live better, live greener.
                </span>
              </p>

            </div>


            {/* =========================
                HIGHLIGHTS
            ========================== */}
            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-slate-200 pt-7">

              <div>
                <p className="text-2xl font-semibold text-slate-950">
                  Green
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Open & landscaped spaces
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-slate-950">
                  Connected
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Designed for community living
                </p>
              </div>

            </div>


            {/* CTA */}
            {/* <a
              href="#project"
              className="mt-9 inline-flex items-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-lime-600"
            >
              Discover Our Vision

              <span className="ml-3 text-lg">
                →
              </span>
            </a> */}


          </div>

        </div>

      </div>
    </section>
  )
}

export default About