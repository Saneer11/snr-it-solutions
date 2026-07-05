import { useForm } from "react-hook-form";
import type { TicketFormData } from "../../types/ticket";
import Button from "../Common/Button";
import SectionTitle from "../Common/SectionTitle";
import { createTicket } from "../../services/ticketService";
import { useState } from "react";
import { uploadAttachment } from "../../services/storageService";

export default function TicketForm() {
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm<TicketFormData>();

const [loading, setLoading] = useState(false);

  const onSubmit = async (data: TicketFormData) => {
  try {
    setLoading(true);

    if (data.attachments?.length) {
      const upload = await uploadAttachment(data.attachments[0]);

      data.attachmentName = upload.attachmentName;
      data.attachmentPath = upload.attachmentPath;
    }

    const ticket = await createTicket(data);

    console.log(ticket);

    alert(`Ticket ${ticket.ticket_number} created successfully!`);

    reset();

  } catch (error) {
    console.error(error);

    alert("Failed to submit ticket.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="bg-[var(--surface)] py-24">
      <div className="mx-auto max-w-4xl px-6">

        <SectionTitle
          subtitle="GET SUPPORT"
          title="Submit a Support Ticket"
          description="Tell us about your issue and we'll get back to you as soon as possible."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10 rounded-2xl border border-slate-800 bg-[#111827] p-8"
        >

          {/* Customer Information */}

          <div>

            <h3 className="mb-6 text-2xl font-semibold text-white">
              Customer Information
            </h3>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name *
                </label>

                <input
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
                />

                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email *
                </label>

                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>

                <input
                  {...register("phone")}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company
                </label>

                <input
                  {...register("company")}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
                />
              </div>

            </div>

          </div>

          {/* Device Information */}

          <div>

            <h3 className="mb-6 text-2xl font-semibold text-white">
              Device Information
            </h3>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Operating System *
                </label>

                <select
                  {...register("operatingSystem", {
                    required: "Operating System is required",
                  })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
                >
                  <option value="">Select Operating System</option>
                  <option>Windows 11</option>
                  <option>Windows 10</option>
                  <option>macOS</option>
                  <option>Linux</option>
                  <option>Other</option>
                </select>

                {errors.operatingSystem && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.operatingSystem.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Device Type *
                </label>

                <select
                  {...register("deviceType", {
                    required: "Device Type is required",
                  })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
                >
                  <option value="">Select Device Type</option>
                  <option>Desktop</option>
                  <option>Laptop</option>
                  <option>Server</option>
                  <option>Virtual Machine</option>
                  <option>Mobile Device</option>
                  <option>Other</option>
                </select>

                {errors.deviceType && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.deviceType.message}
                  </p>
                )}
              </div>

            </div>

          </div>

          {/* Support Request */}

          <div>

            <h3 className="mb-6 text-2xl font-semibold text-white">
              Support Request
            </h3>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Service Category *
                </label>

                <select
                  {...register("service", {
                    required: "Service is required",
                  })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
                >
                  <option value="">Select Service</option>
                  <option>Microsoft 365 Administration</option>
                  <option>Windows & macOS Support</option>
                  <option>Network & VPN</option>
                  <option>Printer & Peripheral Support</option>
                  <option>Cyber Security</option>
                  <option>Server Administration</option>
                  <option>Cloud & Backup</option>
                  <option>Remote IT Support</option>
                  <option>Hardware Support</option>
                  <option>Application Support</option>
                  <option>Identity & Access</option>
                  <option>System Maintenance</option>
                </select>

                {errors.service && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Priority *
                </label>

                <select
                  {...register("priority", {
                    required: "Priority is required",
                  })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">🟢 Low</option>
                  <option value="Medium">🟡 Medium</option>
                  <option value="High">🔴 High</option>
                </select>

                {errors.priority && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.priority.message}
                  </p>
                )}
              </div>

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium">
                Subject *
              </label>

              <input
                {...register("subject", {
                  required: "Subject is required",
                })}
                placeholder="Example: Unable to access Outlook"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
              />

              {errors.subject && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.subject.message}
                </p>
              )}

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium">
                Issue Description *
              </label>

              <textarea
                rows={6}
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Describe the issue in detail. Include any error messages if available."
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3"
              />

              {errors.description && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}

            </div>

          </div>
        {/* Attachments */}

    <div>

        <h3 className="mb-6 text-2xl font-semibold text-white">
            Attachments
        </h3>

        <label className="mb-2 block text-sm font-medium">
        Upload Screenshot / PDF / Log File
        </label>

        <input
        type="file"
        multiple
        accept=".png,.jpg,.jpeg,.pdf,.txt,.log"
        {...register("attachments")}
        className="block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3
        file:mr-4 file:rounded-md file:border-0 file:bg-blue-600
        file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
        />

        <p className="mt-2 text-sm text-slate-400">
        You can upload screenshots, PDF documents or log files (Maximum 10 MB each).
        </p>

    </div>
        <Button
            type="submit"
            disabled={loading}
        >
        {loading ? "Submitting..." : "Submit Ticket"}
        </Button>

        </form>

      </div>
    </section>
  );
}