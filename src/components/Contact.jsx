import { useState } from "react"
import emailjs from "@emailjs/browser"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"

function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const whatsappNumber = "919553768889"

  const whatsappMessage =
    "Hi, I am interested in Aaradya Green Valley. I would like to know more about the project."

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  const instagramUrl = "https://www.instagram.com/aaradyagreenvalley2/"


  // =========================================================
  // SEND ENQUIRY
  // =========================================================
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Keep a reference to the form before the async request.
    // React can make event.currentTarget null after an await.
    const form = event.currentTarget

    setIsSending(true)
    setSuccessMessage("")
    setErrorMessage("")

    const formData = new FormData(form)

    const name = formData.get("name")?.toString().trim() || ""
    const phone = formData.get("phone")?.toString().trim() || ""
    const email = formData.get("email")?.toString().trim() || ""
    const message = formData.get("message")?.toString().trim() || ""

    try {
      const response = await emailjs.send(
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

      console.log(
        "EmailJS SUCCESS:",
        response.status,
        response.text
      )

      setSuccessMessage(
        "Thank you! Your enquiry has been sent successfully. Our team will contact you soon."
      )

      setErrorMessage("")

      // Reset the saved form reference after a successful send.
      form.reset()

    } catch (error) {
      console.error("EmailJS FAILED:", error)

      const errorText =
        error?.text ||
        error?.message ||
        "Unknown EmailJS error"

      setSuccessMessage("")

      setErrorMessage(
        `Sorry, we couldn't send your enquiry. ${errorText}`
      )
    } finally {
      setIsSending(false)
    }
  }


  return (
    <section
      id="contact"
      className="bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">
            Contact Us
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Let's talk about
            <span className="block text-lime-600">
              your future.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Have questions about Aaradya Green Valley?
            Get in touch with our team and discover more about
            the project.
          </p>

        </div>


        {/* Contact Grid */}
        <div className="mt-14 grid overflow-hidden rounded-3xl bg-slate-950 lg:grid-cols-2">


          {/* =========================
              FORM
          ========================== */}
          <div className="p-8 sm:p-10 lg:p-12">

            <h3 className="font-serif text-3xl font-semibold text-white">
              Request a callback
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Leave your details and our team can get back to you.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-lime-400"
                />

              </div>


              {/* Phone */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-lime-400"
                />

              </div>


              {/* Email */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-lime-400"
                />

              </div>


              {/* Message */}
              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-lime-400"
                />

              </div>


              {/* Success Message */}
              {successMessage && (
                <div className="rounded-xl border border-lime-400/30 bg-lime-400/10 px-4 py-3 text-sm leading-6 text-lime-300">
                  {successMessage}
                </div>
              )}


              {/* Error Message */}
              {errorMessage && (
                <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-300">
                  {errorMessage}
                </div>
              )}


              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full rounded-xl px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 ${
                  isSending
                    ? "cursor-not-allowed bg-lime-400/60"
                    : "bg-lime-400 hover:bg-lime-300"
                }`}
              >
                {isSending ? "Sending..." : "Send Enquiry"}
              </button>

            </form>

          </div>


          {/* =========================
              CONTACT OPTIONS
          ========================== */}
          <div className="border-t border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
              Connect With Us
            </p>

            <h3 className="mt-4 font-serif text-3xl font-semibold text-white">
              We're just a message away.
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Choose the easiest way to reach our team.
            </p>


            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-white/10"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
                <FaWhatsapp className="text-2xl" />
              </div>

              <div>

                <p className="font-semibold text-white">
                  WhatsApp
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Chat with our team
                </p>

              </div>

              <span className="ml-auto text-lg text-lime-400 transition-transform group-hover:translate-x-1">
                →
              </span>

            </a>


            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-white/10"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                <FaInstagram className="text-2xl" />
              </div>

              <div>

                <p className="font-semibold text-white">
                  Instagram
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Follow our journey
                </p>

              </div>

              <span className="ml-auto text-lg text-lime-400 transition-transform group-hover:translate-x-1">
                →
              </span>

            </a>


            {/* Phone */}
            <a
              href="tel:+919553768889"
              className="group mt-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-white/10"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl">
                📞
              </div>

              <div>

                <p className="font-semibold text-white">
                  Call Us
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Speak with our team
                </p>

              </div>

              <span className="ml-auto text-lg text-lime-400 transition-transform group-hover:translate-x-1">
                →
              </span>

            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact