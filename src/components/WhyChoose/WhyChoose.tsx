import { features } from "../../data/features";
import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";

export default function WhyChoose() {
  return (
    <section className="bg-[var(--surface)] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="WHY CHOOSE SNR"
          title="Professional IT Support You Can Trust"
          description="We combine technical expertise, responsive support and security-focused solutions to help businesses stay productive."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <Card key={feature.title}>

                <Icon
                  size={40}
                  className="mb-6 text-blue-500"
                />

                <h3 className="mb-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>

              </Card>

            );

          })}

        </div>

      </div>
    </section>
  );
}