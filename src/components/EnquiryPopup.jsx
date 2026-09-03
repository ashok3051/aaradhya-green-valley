import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"

function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Show popup shortly after website loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget

    setIsSending(true)
    setSuccessMessage("")
    setErrorMessage("")

    const formData = new FormData(form)

    const name = formData.get("name")?.toString().trim() || ""
    const phone = formData.get("phone")?.toString().trim() || ""
    const email = formData.get("email")?.toString().trim() || ""
    const message =
      formData.get("message")?.toString().trim() || ""

    try {
      await emailjs.send(
        "service_o3bblor",
        "template_r2z2qux",
        {
          name,
          phone,
          email,
          message,
        },
        {
          publicKey: "iKTP1UmyvYRf3KPOG",
        }
      )

      setSuccessMessage(
        "Thank you! Your enquiry has been sent successfully."
      )

      form.reset()

      setTimeout(() => {
        setIsOpen(false)
        setSuccessMessage("")
      }, 1800)
    } catch (error) {
      console.error("Popup enquiry failed:", error)

      setErrorMessage(
        "Sorry, we couldn't send your enquiry. Please try again."
      )
    } finally {
      setIsSending(false)
    }
  }

  // Don't render anything until popup should be visible
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">

      {/* Popup */}
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close enquiry form"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition hover:bg-slate-950 hover:text-white"
        >
          ×
        </button>

        {/* Header */}
        <div className="bg-slate-950 px-7 py-8 text-white sm:px-9">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
            Aaradya Green Valley
          </p>

          <h2 className="mt-3 pr-10 font-serif text-3xl font-semibold sm:text-4xl">
            Enquire Now
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Interested in our project? Leave your details and
            our team will get in touch with you.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-7 sm:p-9"
        >

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-lime-500 focus:bg-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-lime-500 focus:bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-lime-500 focus:bg-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Message
            </label>

            <textarea
              name="message"
              rows="3"
              placeholder="Tell us what you would like to know..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-lime-500 focus:bg-white"
            />
          </div>

          {/* Success */}
          {successMessage && (
            <div className="rounded-xl border border-lime-200 bg-lime-50 px-4 py-3 text-sm text-lime-700">
              {successMessage}
            </div>
          )}

          {/* Error */}
          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full rounded-xl px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 ${
              isSending
                ? "cursor-not-allowed bg-lime-300"
                : "bg-lime-400 hover:bg-lime-300"
            }`}
          >
            {isSending ? "Sending..." : "Submit Enquiry"}
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-full text-sm font-medium text-slate-500 transition hover:text-slate-950"
          >
            Maybe Later
          </button>

        </form>

      </div>
    </div>
  )
}

export default EnquiryPopup