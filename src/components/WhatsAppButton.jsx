import { FaWhatsapp, FaInstagram } from "react-icons/fa"

function WhatsAppButton() {
  const whatsappNumber = "919553768889"

  const message =
    "Hi, I am interested in Aaradya Green Valley. I would like to know more about the project."

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  const instagramUrl = "https://www.instagram.com/"

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-3">

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aaradya Green Valley on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-3xl" />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-slate-950 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>


      {/* Instagram */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Aaradya Green Valley on Instagram"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-2xl transition duration-300 hover:scale-110"
      >
        <FaInstagram className="text-3xl" />

        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-slate-950 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
          Follow us on Instagram
        </span>
      </a>

    </div>
  )
}

export default WhatsAppButton