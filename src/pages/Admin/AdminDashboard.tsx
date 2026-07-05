import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/adminService";
import type { Ticket } from "../../types/admin";
import StatusBadge from "../../components/Admin/StatusBadge";
import PriorityBadge from "../../components/Admin/PriorityBadge";

export default function AdminDashboard() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    async function loadTickets() {
      try {
        const data = await getAllTickets();
        setTickets(data ?? []);
      } catch (err) {
        console.error(err);
      }
    }

    loadTickets();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] p-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="min-w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-4 py-3 text-left">Ticket</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Priority</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-t border-slate-700"
              >
                <td className="px-4 py-3">
                  {ticket.ticket_number}
                </td>

                <td className="px-4 py-3">
                  {ticket.customer_name}
                </td>

                <td className="px-4 py-3">
                  {ticket.service_type}
                </td>

                <td className="px-4 py-3">
                  <PriorityBadge priority={ticket.priority} />
                </td>

                <td className="px-4 py-3">
                  <StatusBadge status={ticket.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tickets.length === 0 && (
          <div className="p-8 text-center text-slate-400">
            No tickets found.
          </div>
        )}
      </div>
    </div>
  );
}