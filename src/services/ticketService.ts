import { supabase } from "../lib/supabase";
import type { TicketFormData } from "../types/ticket";

export async function createTicket(data: TicketFormData) {
  const { data: ticket, error } = await supabase
    .from("tickets")
    .insert({
      customer_name: data.fullName,
      customer_email: data.email,
      phone: data.phone,
      company: data.company,

      service_type: data.service,
      priority: data.priority,

      subject: data.subject,
      description: data.description,

      operating_system: data.operatingSystem,
      device_type: data.deviceType,

      attachment_name: data.attachmentName,
      attachment_path: data.attachmentPath,

      status: "Open",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return ticket;
}