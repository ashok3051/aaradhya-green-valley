import { useCallback, useEffect, useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import WhyAaradhya from "./components/WhyAaradhya"
import Projects from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"
import Amenities from "./components/Amenities"
import Gallery from "./components/Gallery"
import Location from "./components/Location"
import Contact from "./components/Contact"
import WhatsAppButton from "./components/WhatsAppButton"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import ScrollToTop from "./components/ScrollToTop"
import EnquiryPopup from "./components/EnquiryPopup"


function HomePage({ showEnquiryPopup }) {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyAaradhya />
        <Projects />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>

      <WhatsAppButton />

      <Footer />

      {/* Show enquiry popup only after loader is completely finished */}
      {showEnquiryPopup && <EnquiryPopup />}
    </>
  )
}


function App() {
  const [loading, setLoading] = useState(true)
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false)

  const handleLoaderComplete = useCallback(() => {
    // Remove any old hash such as #contact
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      )
    }

    // Always start the website from the TOP
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })

    // Finish loading
    setLoading(false)

    // Small delay so the Home page appears first,
    // then show the enquiry popup
    setTimeout(() => {
      setShowEnquiryPopup(true)
    }, 300)
  }, [])


  // Make sure the homepage always starts at the top
  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0)
    }
  }, [loading])


  return (
    <BrowserRouter>

      {/* Scroll to top whenever route changes */}
      <ScrollToTop />

      <div className="min-h-screen bg-slate-950">

        {/* ================================
            LOADING SCREEN
        ================================= */}
        {loading && (
          <Loader onComplete={handleLoaderComplete} />
        )}


        <Routes>

          {/* ================================
              HOME PAGE
          ================================= */}
          <Route
            path="/"
            element={
              <HomePage
                showEnquiryPopup={showEnquiryPopup}
              />
            }
          />


          {/* ================================
              PROJECT DETAILS PAGE
          ================================= */}
          <Route
            path="/projects/:slug"
            element={
              <>
                <Navbar />

                <ProjectDetails />

                <WhatsAppButton />
              </>
            }
          />


          {/* ================================
              CONTACT PAGE
          ================================= */}
          <Route
            path="/contact"
            element={
              <>
                <Navbar />

                <main>
                  <Contact />
                </main>

                <WhatsAppButton />

                <Footer />
              </>
            }
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App