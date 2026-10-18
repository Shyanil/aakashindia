// The one place form submissions go. No backend is wired up yet, so this reports
// "not-configured" and the form tells the visitor nothing was sent (and keeps their input).
//
// TODO: connect a real endpoint (e.g. a Route Handler that emails the sales team or writes to
// the CRM), route by `form` ("Rental Inquiry Form", "Rental Property Registration",
// "Resale Property Registration", ...), upload any File values, then return { status: "sent" }.

export type SubmitResult = { status: "sent" } | { status: "not-configured" } | { status: "error"; message: string };

export async function submitForm(form: string, data: FormData): Promise<SubmitResult> {
  void form;
  void data;
  return { status: "not-configured" };
}
