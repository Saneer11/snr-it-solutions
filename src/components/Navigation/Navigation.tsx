import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#080D14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="text-xl font-bold tracking-wide"
        >
          <span className="text-blue-500">SNR</span>{" "}
          <span className="text-white">IT Solutions</span>
        </Link>

        <nav className="hidden gap-8 md:flex">

          <a
            href="#services"
            className="text-gray-300 transition hover:text-blue-400"
          >
            Services
          </a>

          <a
            href="#pricing"
            className="text-gray-300 transition hover:text-blue-400"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-gray-300 transition hover:text-blue-400"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="text-gray-300 transition hover:text-blue-400"
          >
            Contact
          </a>

        </nav>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold transition hover:bg-blue-700">
          Submit Ticket
        </button>

      </div>
    </header>
  );
}