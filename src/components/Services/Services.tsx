import { services } from "../../data/services";
import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--background)] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="OUR SERVICES"
          title="Professional IT Services"
          description="From Microsoft 365 administration to cybersecurity, we provide reliable IT solutions for businesses and individuals."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <Card key={service.title}>

                <Icon
                  className="mb-6 text-blue-500"
                  size={42}
                />

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-400">
                  {service.description}
                </p>

                <button className="font-semibold text-blue-400 hover:text-blue-300">
                  Learn More →
                </button>

              </Card>

            );

          })}

        </div>

      </div>
    </section>
  );
}