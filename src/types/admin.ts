export interface Ticket {
  id: string;
  ticket_number: string;

  customer_name: string;
  customer_email: string;
  phone?: string;
  company?: string;

  service_type: string;
  priority: string;
  status: string;

  subject: string;
  description: string;

  operating_system?: string;
  device_type?: string;

  attachment_name?: string;
  attachment_path?: string;

  created_at: string;
  updated_at: string;
}