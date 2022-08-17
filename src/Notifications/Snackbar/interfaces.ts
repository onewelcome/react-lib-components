import { ButtonHTMLAttributes } from "react";

export type Variant = "info" | "success" | "error";

export type Actions = (ButtonHTMLAttributes<HTMLButtonElement> & { label: string })[];

export interface SnackbarOptionsProps {
  actions?: Actions;
  variant?: Variant;
  duration?: number;
}
