type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  let classes =
    "rounded-full px-3 py-1 text-xs font-semibold";

  switch (status) {
    case "Open":
      classes += " bg-green-500/20 text-green-400";
      break;

    case "In Progress":
      classes += " bg-yellow-500/20 text-yellow-400";
      break;

    case "Closed":
      classes += " bg-slate-600 text-white";
      break;

    default:
      classes += " bg-slate-700";
  }

  return (
    <span className={classes}>
      {status}
    </span>
  );
}