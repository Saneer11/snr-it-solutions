type Props = {
  subtitle: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="mb-5 text-4xl font-bold text-white">
        {title}
      </h2>

      <p className="text-lg text-slate-400">
        {description}
      </p>
    </div>
  );
}