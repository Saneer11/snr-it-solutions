import { supabase } from "../lib/supabase";

export async function uploadAttachment(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("attachments")
    .upload(fileName, file);

  if (error) {
    throw error;
  }

  return {
    attachmentName: file.name,
    attachmentPath: data.path,
  };
}