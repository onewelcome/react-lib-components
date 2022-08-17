import { DataAttributeKey } from "../interfaces";

/** Radios */
export interface FormSelector extends FormElement {
  helperText?: string;
  errorMessage?: string;
  parentHelperId?: string;
  parentErrorId?: string;
}

/** Default form elements */
export interface FormElement {
  error?: boolean;
  [dataAttribute: DataAttributeKey]: any;
}
