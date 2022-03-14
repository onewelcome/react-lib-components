import { HTMLProps } from '../interfaces';

/** Radios */
export interface FormSelector<T> extends FormElement<T> {
  helperText?: string;
  errorMessage?: string;
  parentHelperId?: string;
  parentErrorId?: string;
}

/** Default form elements */
export interface FormElement<T> extends HTMLProps<T> {
  error?: boolean;
}
