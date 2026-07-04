import Navigation from "../components/Navigation/Navigation";
import TrustedTech from "../components/TrustedTech/TrustedTech";

export default function Home() {
  return (
    <>
      <Navigation />

      <section className="flex min-h-screen items-center justify-center bg-[#080D14] px-6">

        <div className="max-w-4xl text-center">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
            Professional Remote IT Support
          </p>

          <h1 className="mb-8 text-6xl font-bold leading-tight">
            IT Support

            <span className="block text-blue-500">
              Built For Businesses
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
            SNR IT Solutions provides secure remote IT support,
            Microsoft 365 administration,
            networking,
            Windows troubleshooting,
            cybersecurity,
            and business application support.
          </p>

          <div className="flex justify-center gap-4">

            <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
              Submit Ticket
            </button>

            <button className="rounded-lg border border-slate-600 px-8 py-4 transition hover:border-blue-500">
              View Services
            </button>

          </div>

        </div>

      </section>

      <TrustedTech />

    </>
  );
}