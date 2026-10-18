// Field definitions shared by every lead form (rendered by components/LeadForm.tsx).

export type Option = { value: string; label: string };
export const opts = (...values: string[]): Option[] => values.map((v) => ({ value: v, label: v }));

export type Field =
  | { kind: "text" | "tel" | "email"; name: string; label: string; required?: boolean; half?: boolean; autoComplete?: string }
  | { kind: "textarea"; name: string; label: string; required?: boolean; rows?: number }
  | { kind: "select"; name: string; label: string; options: Option[]; required?: boolean; half?: boolean }
  | { kind: "checkboxes"; name: string; label: string; options: Option[] }
  | { kind: "files"; name: string; label: string; accept: string; acceptLabel?: string; maxFiles: number; maxMB: number; required?: boolean };
