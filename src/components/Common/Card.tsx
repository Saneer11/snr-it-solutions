import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500">
      {children}
    </div>
  );
}