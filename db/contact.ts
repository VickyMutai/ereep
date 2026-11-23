export type ContactContent = {
  heroTitle: string;
  heroLead: string;
  formTitle: string;
  formLead: string;
  responseNote: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
};

export const defaultContactContent: ContactContent = {
  heroTitle: "Start a conversation with EREEP.",
  heroLead:
    "Whether you want to understand our work, explore a partnership or ask about participating in a programme, we would be glad to hear from you.",
  formTitle: "How can we help?",
  formLead:
    "Share a few details below and the EREEP team will respond through the email address or phone number you provide.",
  responseNote:
    "Please allow the team time to review your message and connect it with the right programme or person.",
  email: "edmundreep@gmail.com",
  phone: "0715408929",
  address: "",
  hours: "",
};

export async function getContactContent(): Promise<ContactContent> {
  return defaultContactContent;
}
