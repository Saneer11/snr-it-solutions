import Button from "../Common/Button";

export default function Hero() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl">

          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-blue-400">
            PROFESSIONAL REMOTE IT SUPPORT
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-6xl">

            Reliable IT Solutions

            <span className="block text-blue-500">
              For Businesses &
              Individuals
            </span>

          </h1>

          <p className="mb-8 text-lg leading-8 text-slate-400">

            SNR IT Solutions provides professional remote IT support,
            Microsoft 365 administration,
            Windows & macOS troubleshooting,
            networking,
            cybersecurity,
            cloud solutions,
            and business application support.

          </p>

          <div className="mb-10 flex flex-wrap gap-4">

            <Button>
              Get Support
            </Button>

            <Button variant="secondary">
              Explore Services
            </Button>

          </div>

          <div className="grid grid-cols-1 gap-4 text-slate-300 sm:grid-cols-3">

            <div>
              ✅ Fast Response
            </div>

            <div>
              ✅ Expert Support
            </div>

            <div>
              ✅ Satisfaction Guaranteed
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src="/hero.png"
            alt="IT Support"
            className="w-full max-w-xl"
          />

        </div>

      </div>
    </section>
  );
}