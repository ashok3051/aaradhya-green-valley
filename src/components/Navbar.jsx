import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  /*
   * =========================================================
   * HANDLE SECTION SCROLL AFTER NAVIGATING TO HOME
   * =========================================================
   */
  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return
    }

    const sectionId = location.hash.substring(1)

    const scrollToSection = () => {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }

    // Give React time to render the Home page
    const timer1 = setTimeout(scrollToSection, 100)
    const timer2 = setTimeout(scrollToSection, 300)
    const timer3 = setTimeout(scrollToSection, 600)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [location.pathname, location.hash])


  /*
   * =========================================================
   * HOME
   * =========================================================
   */
  const goHome = () => {
    closeMenu()

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })

      return
    }

    navigate("/")
  }


  /*
   * =========================================================
   * HOME SECTION
   * =========================================================
   */
  const goToSection = (sectionId) => {
    closeMenu()

    /*
     * Already on Home
     */
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }

      return
    }

    /*
     * Coming from Project Details or Contact page
     *
     * Example:
     * /projects/aaradhya-woods
     *        ↓
     * /#amenities
     */
    navigate({
      pathname: "/",
      hash: `#${sectionId}`,
    })
  }


  /*
   * =========================================================
   * CONTACT
   * =========================================================
   */
  const goToContact = () => {
    closeMenu()
    navigate("/contact")
  }


  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-md">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* =================================================
            LOGO
        ================================================= */}
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3"
          aria-label="Go to Home"
        >
          <img
            src="/logo/aaradya-logo.png"
            alt="Aaradya Green Valley"
            className="h-20 w-auto object-contain"
          />
        </button>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Home */}
          <button
            type="button"
            onClick={goHome}
            className="text-sm text-white transition hover:text-amber-400"
          >
            Home
          </button>


          {/* About */}
          <button
            type="button"
            onClick={() => goToSection("about")}
            className="text-sm text-white transition hover:text-amber-400"
          >
            About Us
          </button>


          {/* Projects */}
          <button
            type="button"
            onClick={() => goToSection("projects")}
            className="text-sm text-white transition hover:text-amber-400"
          >
            Projects
          </button>


          {/* Amenities */}
          <button
            type="button"
            onClick={() => goToSection("amenities")}
            className="text-sm text-white transition hover:text-amber-400"
          >
            Amenities
          </button>


          {/* Gallery */}
          <button
            type="button"
            onClick={() => goToSection("gallery")}
            className="text-sm text-white transition hover:text-amber-400"
          >
            Gallery
          </button>


          {/* Location */}
          <button
            type="button"
            onClick={() => goToSection("location")}
            className="text-sm text-white transition hover:text-amber-400"
          >
            Location
          </button>


          {/* Contact */}
          {/* <button
            type="button"
            onClick={goToContact}
            className="text-sm text-white transition hover:text-amber-400"
          >
            Contact
          </button> */}

        </div>


        {/* =================================================
            CONTACT BUTTON
        ================================================= */}
        <button
          type="button"
          onClick={goToContact}
          className="hidden rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 md:block"
        >
          Contact Us
        </button>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/20 px-3 py-2 text-white transition hover:border-amber-400 hover:text-amber-400 md:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </nav>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">

          <div className="flex flex-col gap-1">

            {/* Home */}
            <button
              type="button"
              onClick={goHome}
              className="rounded-lg px-4 py-3 text-left text-sm text-white transition hover:bg-white/5 hover:text-amber-400"
            >
              Home
            </button>


            {/* About */}
            <button
              type="button"
              onClick={() => goToSection("about")}
              className="rounded-lg px-4 py-3 text-left text-sm text-white transition hover:bg-white/5 hover:text-amber-400"
            >
              About Us
            </button>


            {/* Projects */}
            <button
              type="button"
              onClick={() => goToSection("projects")}
              className="rounded-lg px-4 py-3 text-left text-sm text-white transition hover:bg-white/5 hover:text-amber-400"
            >
              Projects
            </button>


            {/* Amenities */}
            <button
              type="button"
              onClick={() => goToSection("amenities")}
              className="rounded-lg px-4 py-3 text-left text-sm text-white transition hover:bg-white/5 hover:text-amber-400"
            >
              Amenities
            </button>


            {/* Gallery */}
            <button
              type="button"
              onClick={() => goToSection("gallery")}
              className="rounded-lg px-4 py-3 text-left text-sm text-white transition hover:bg-white/5 hover:text-amber-400"
            >
              Gallery
            </button>


            {/* Location */}
            <button
              type="button"
              onClick={() => goToSection("location")}
              className="rounded-lg px-4 py-3 text-left text-sm text-white transition hover:bg-white/5 hover:text-amber-400"
            >
              Location
            </button>


            {/* Contact */}
            <button
              type="button"
              onClick={goToContact}
              className="rounded-lg px-4 py-3 text-left text-sm text-white transition hover:bg-white/5 hover:text-amber-400"
            >
              Contact
            </button>


            {/* Mobile Contact Button */}
            <button
              type="button"
              onClick={goToContact}
              className="mt-3 rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Contact Us
            </button>

          </div>

        </div>
      )}

    </header>
  )
}

export default Navbar