import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Disable browser automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    // If a section hash is present, scroll to that section
    // after the new page has rendered.
    if (location.hash) {
      const scrollToHash = () => {
        const id = location.hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
          return true
        }

        return false
      }

      // Try again after the Home page DOM is available.
      const timer1 = setTimeout(scrollToHash, 50)
      const timer2 = setTimeout(scrollToHash, 200)
      const timer3 = setTimeout(scrollToHash, 500)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }

    // Normal route navigation: start at the top.
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    scrollToTop()

    const timer1 = setTimeout(scrollToTop, 50)
    const timer2 = setTimeout(scrollToTop, 200)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [location.pathname, location.hash])

  return null
}

export default ScrollToTop
