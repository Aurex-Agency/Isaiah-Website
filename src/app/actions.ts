"use server";

export type InquiryFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const REASONS = ["Brand Partnership", "Modeling", "Creative or Local Project"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const reason = String(formData.get("reason") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !reason || !message) {
    return { status: "error", message: "Please fill in every field." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!REASONS.includes(reason)) {
    return { status: "error", message: "Please choose a reason for contact." };
  }

  if (message.length < 10) {
    return {
      status: "error",
      message: "Please add a little more detail to your message.",
    };
  }

  // Email delivery is not yet wired up (open item, see AUREX-STATUS.md).
  // Submissions are logged server-side as a placeholder until that's built.
  console.log("New inquiry submission", { name, email, reason, message });

  return { status: "success" };
}
