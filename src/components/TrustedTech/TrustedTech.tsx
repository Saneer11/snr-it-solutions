import { technologies } from "../../data/technologies";

export default function TrustedTech() {
  return (
    <section className="bg-[#0B1220] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
            Technologies We Support
          </p>

          <h2 className="mb-4 text-4xl font-bold text-white">
            Trusted by Technology.
            <br />
            Driven by Expertise.
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-slate-400">
            We support the world's leading business technologies,
            helping organizations stay productive, secure and connected.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {technologies.map((tech) => (

            <div
              key={tech.title}
              className="rounded-xl border border-slate-800 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <h3 className="mb-3 text-xl font-semibold text-white">
                {tech.title}
              </h3>

              <p className="text-slate-400">
                {tech.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}