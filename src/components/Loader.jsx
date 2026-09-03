import { useEffect } from "react"

function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
      
      <div className="flex flex-col items-center">

        {/* Aaradya Logo */}
        <img
          src="/logo/aaradya-logo.png"
          alt="Aaradya Green Valley"
          className="h-28 w-auto object-contain sm:h-32 animate-loader-logo"
        />

        {/* Brand Name */}
        <div className="mt-5 text-center animate-loader-text">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-amber-400">
            Aaradya
          </p>

          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-lime-400">
            Green Valley
          </p>
        </div>

        {/* Loading Line */}
        <div className="mt-8 h-px w-32 overflow-hidden bg-white/10">
          <div className="h-full w-full animate-loader-line bg-amber-400" />
        </div>

      </div>
    </div>
  )
}

export default Loader