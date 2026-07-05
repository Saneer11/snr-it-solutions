export interface TicketFormData {
  // Customer Information
  fullName: string;
  email: string;
  phone: string;
  company?: string;

  // Support Information
  service: string;
  priority: "Low" | "Medium" | "High";

  subject: string;
  description: string;

  // Device Information
  operatingSystem: string;
  deviceType: string;

  // Attachments
  attachments?: FileList;
  attachmentName?: string;
  attachmentPath?: string;
}