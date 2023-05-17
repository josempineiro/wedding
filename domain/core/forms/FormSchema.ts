import { Field, FieldType } from "@/domain/core/forms/fields";
import { FieldTypes } from "@/domain/core/forms/fields/Field";

export type FormErrors = Record<string, string[]>;

export type FormFieldValidator = (
  value: any
) => Promise<true | string | string[]> | true | string | string[];

export type FormValidatorFunction<T> = (options: T) => FormFieldValidator;

export interface FormValidators {
  minLength: FormValidatorFunction<number>;
  required: FormFieldValidator;
  email: FormFieldValidator;
  isDateBefore: FormValidatorFunction<Date>;
  isDateBeforeNow: FormFieldValidator;
}

export type FormValidateOptions = {
  state: FormState;
  validators: FormValidators;
};

export type Validation =
  | Promise<true | string | string[]>
  | true
  | string
  | string[]
  | Array<Promise<true | string | string[]> | true | string | string[]>;

export type FormFieldValidate = (
  value: FieldType,
  options: FormValidateOptions
) => Validation;

export type FormValidate = (
  value: FieldType,
  options: {
    state: FormState;
    validators: FormValidators;
  }
) => Validation;

export interface FormState {
  values: FormValues;
  errors: FormErrors;
  isSubmitting: boolean;
  isValidating: boolean;
}

export interface FormValues extends Record<string, FieldType> {}

export interface FormSchema {
  id: string;
  name: string;
  fields: Array<
    Omit<Field<any>, "value"> & {
      defaultValue?: unknown;
      validate?: FormFieldValidate;
    }
  >;
  validate?: FormValidate;
}
