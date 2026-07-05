import { workflow } from "../../data/workflow";
import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";

export default function Workflow() {
  return (
    <section className="bg-[var(--background)] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="HOW IT WORKS"
          title="Simple, Secure & Efficient"
          description="Getting IT support is quick and straightforward. Here's how our process works."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {workflow.map((item) => {

            const Icon = item.icon;

            return (
              <Card key={item.step}>

                <div className="mb-4 text-sm font-bold text-blue-500">
                  STEP {item.step}
                </div>

                <Icon
                  size={40}
                  className="mb-6 text-blue-500"
                />

                <h3 className="mb-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {item.description}
                </p>

              </Card>
            );

          })}

        </div>

      </div>
    </section>
  );
}