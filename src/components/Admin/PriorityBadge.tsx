type Props = {
  priority: string;
};

export default function PriorityBadge({ priority }: Props) {
  let classes =
    "rounded-full px-3 py-1 text-xs font-semibold";

  switch (priority) {
    case "High":
      classes += " bg-red-500/20 text-red-400";
      break;

    case "Medium":
      classes += " bg-yellow-500/20 text-yellow-400";
      break;

    case "Low":
      classes += " bg-green-500/20 text-green-400";
      break;

    default:
      classes += " bg-slate-700";
  }

  return (
    <span className={classes}>
      {priority}
    </span>
  );
}