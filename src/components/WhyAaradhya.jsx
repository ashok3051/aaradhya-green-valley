function WhyAaradya() {
  const features = [
    {
      icon: "🌿",
      title: "Green Living",
      description:
        "Thoughtfully designed spaces surrounded by greenery, open areas and a refreshing natural environment.",
    },
    {
      icon: "🏡",
      title: "Thoughtful Planning",
      description:
        "A community concept focused on comfortable living, accessible spaces and a well-planned environment.",
    },
    {
      icon: "🛡️",
      title: "Secure Community",
      description:
        "A planned residential environment designed with safety, comfort and peace of mind in focus.",
    },
    {
      icon: "✨",
      title: "Modern Lifestyle",
      description:
        "A contemporary lifestyle concept bringing together comfort, convenience and community living.",
    },
  ]

  return (
    <section
      id="why-Aaradya"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >

      {/* Decorative Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-lime-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Why Aaradya
          </p>

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Designed around
            <span className="block text-lime-400">
              the way you want to live.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            More than a place to live, Aaradya Green Valley is
            envisioned as a community where thoughtful planning,
            greenery and modern living come together.
          </p>

        </div>


        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/40 hover:bg-white/[0.07]"
            >

              {/* Number */}
              <div className="absolute right-6 top-5 text-sm font-medium text-white/20">
                0{index + 1}
              </div>


              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl transition duration-500 group-hover:bg-lime-400/10 group-hover:scale-110">
                {feature.icon}
              </div>


              {/* Title */}
              <h3 className="mt-7 text-xl font-semibold text-white">
                {feature.title}
              </h3>


              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>


              {/* Bottom Accent */}
              <div className="mt-7 h-px w-10 bg-amber-400 transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default WhyAaradya