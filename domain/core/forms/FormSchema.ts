import { Field, FieldType } from "@/domain/core/forms/fields";

export type FormErrors = Record<string, string[]>;

export type FormFieldValidator<T = any> = (
  value: T
) => Promise<true | string | string[]> | true | string | string[];

export type FormValidatorFunction<TParams, TValue> = (
  params: TParams
) => FormFieldValidator<TValue>;

export interface FormValidators {
  minLength: FormValidatorFunction<number, number>;
  required: FormFieldValidator<unknown>;
  email: FormFieldValidator<string>;
  isDateBefore: FormValidatorFunction<Date, Date>;
  isDateBeforeNow: FormFieldValidator<Date>;
}

export type FormValidateOptions<TValues extends Record<string, any>> = {
  state: FormState<TValues>;
  validators: FormValidators;
};

export type Validation =
  | Promise<true | string | string[]>
  | true
  | string
  | string[]
  | Array<Promise<true | string | string[]> | true | string | string[]>;

export type FormFieldValidate<TValues extends Record<string, any>> = (
  value: FieldType,
  options: FormValidateOptions<TValues>
) => Validation;

export type FormValidate<TValues extends Record<string, any>> = (
  value: FieldType,
  options: {
    state: FormState<TValues>;
    validators: FormValidators;
  }
) => Validation;

export interface FormState<TValues extends Record<string, any>> {
  values: TValues;
  errors: FormErrors;
  isSubmitting: boolean;
  isValidating: boolean;
}

export interface FormSchema<TValues extends Record<string, any>> {
  id: string;
  name: string;
  fields: Array<
    Omit<Field<any>, "value"> & {
      defaultValue?: unknown;
      validate?: FormFieldValidate<TValues>;
    }
  >;
  validate?: FormValidate<TValues>;
}
