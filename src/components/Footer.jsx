function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div
              className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              aria-label="Aaradya Green Valley"
            >
              Aaradya <span className="text-lime-400">Green Valley</span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              A thoughtfully envisioned residential community designed
              around greenery, comfort and better living.
            </p>


          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <a href="#home" className="block text-sm text-slate-400 hover:text-white">
                Home
              </a>

              <a href="#about" className="block text-sm text-slate-400 hover:text-white">
                About Us
              </a>

              <a href="#projects" className="block text-sm text-slate-400 hover:text-white">
                Projects
              </a>

              <a href="#amenities" className="block text-sm text-slate-400 hover:text-white">
                Amenities
              </a>

              <a href="#gallery" className="block text-sm text-slate-400 hover:text-white">
                Gallery
              </a>

              <a href="#location" className="block text-sm text-slate-400 hover:text-white">
                Location
              </a>

              <a href="#contact" className="block text-sm text-slate-400 hover:text-white">
                Contact
              </a>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
              Visit Us
            </h3>

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

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © 2026 Aaradya Green Valley. All rights reserved.
          </p>


        </div>

      </div>

    </footer>
  )
}

export default Footer