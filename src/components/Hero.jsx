import { useEffect, useState } from "react"

function Hero() {
  const heroImages = [
    "/images/hero.jpeg",
    "/images/hero2.jpeg",
    "/images/hero3.jpeg",
    "/images/hero4.jpeg",
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-0px)] overflow-hidden bg-slate-950 pt-20"
    >

      {/* =========================
          BACKGROUND SLIDESHOW
          Blurred version fills the
          entire screen
      ========================== */}

      {heroImages.map((image, index) => (
        <div
          key={`background-${image}`}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === currentImage
              ? "opacity-100"
              : "opacity-0"
          }`}
        >

          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover object-right blur-xl"
          />

          {/* Dark background overlay */}
          <div className="absolute inset-0 bg-slate-950/50" />

        </div>
      ))}


      {/* =========================
          FULL IMAGE SLIDESHOW
          RIGHT SIDE
          Keeps image from being
          cropped
      ========================== */}

      <div className="absolute inset-y-0 right-0 z-[1] w-full lg:w-[72%]">

        {heroImages.map((image, index) => (
          <img
            key={`foreground-${image}`}
            src={image}
            alt="Aaradhya Green Valley"
            className={`absolute inset-0 h-full w-full object-contain object-right transition-all duration-[1800ms] ease-in-out ${
              index === currentImage
                ? "scale-100 opacity-100"
                : "scale-[1.03] opacity-0"
            }`}
          />
        ))}

      </div>


      {/* =========================
          IMAGE DARK OVERLAY
          Keeps text readable
      ========================== */}

      <div className="absolute inset-0 z-[2] bg-slate-950/10" />


      {/* =========================
          LEFT SIDE GRADIENT
      ========================== */}

      <div className="absolute inset-0 z-[3] bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />


      {/* =========================
          HERO CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-lime-400">
            Premium Residential / Commercial Communities
          </p>


          {/* Main Heading */}
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Land. Living.

            <span className="block text-lime-400">
              Legacy.
            </span>
          </h1>


          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            A thoughtfully planned community designed for
            comfortable living, beautiful surroundings and
            lasting value.
          </p>


          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-amber-400 px-7 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-300 hover:shadow-xl"
            >
              Explore Project
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/70 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-slate-950"
            >
              Enquire Now
            </a>

          </div>


          {/* =========================
              PROJECT STATS
          ========================== */}

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-8">

            {/* Acres */}
            <div>
              <p className="text-3xl font-semibold text-amber-400 sm:text-4xl">
                300+
              </p>

              <p className="mt-1 text-sm text-slate-300">
                Acres
              </p>
            </div>


            {/* Plots */}
            <div>
              <p className="text-3xl font-semibold text-amber-400 sm:text-4xl">
                200+
              </p>

              <p className="mt-1 text-sm text-slate-300">
                Premium Plots
              </p>
            </div>


            {/* Documentation */}
            <div>
              <p className="text-3xl font-semibold text-amber-400 sm:text-4xl">
                100%
              </p>

              <p className="mt-1 text-sm text-slate-300">
                Clear Documentation
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* =========================
          SLIDE INDICATORS
      ========================== */}

      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-2 sm:flex">

        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentImage
                ? "w-8 bg-amber-400"
                : "w-2 bg-white/40"
            }`}
          />
        ))}

      </div>


      {/* =========================
          SCROLL INDICATOR
          Positioned at the bottom
          without overlapping stats
      ========================== */}

      <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex">

        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <div className="h-8 w-px bg-white/40" />

      </div>

    </section>
  )
}

export default Hero