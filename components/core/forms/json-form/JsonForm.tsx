import { forwardRef, useReducer } from "react";
import { TextField } from "@/components/core/forms/text-field";
import { DateField } from "@/components/core/forms/date-field";
import { TagsField } from "@/components/core/forms/tags-field";
import { Button } from "@/components/core/buttons/Button";
import { Form, type FormProps } from "@/components/core/forms/form/Form";
import {
  FormSchema,
  FormValues,
  FormErrors,
  FormState,
} from "@/domain/core/forms/FormSchema";
import { FieldType } from "@/domain/core/forms/fields/Field";

export interface JsonFormProps
  extends Omit<FormProps, "onSubmit" | "children"> {
  schema: FormSchema;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  children?: React.ReactNode;
}

type SetFormErrorsAction = {
  type: "SET_FORM_ERRORS";
  payload: FormErrors;
};

type SetFormValuesAction = {
  type: "SET_FORM_VALUES";
  payload: FormValues;
};

type SetFielValuesAction = {
  type: "SET_FIELD_VALUE";
  payload: {
    field: string;
    value: FieldType;
  };
};

type FormAction =
  | SetFormValuesAction
  | SetFormErrorsAction
  | SetFielValuesAction;

const formStateReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.field]: action.payload.value,
        },
      };
    case "SET_FORM_VALUES":
      return {
        ...state,
        values: action.payload,
      };
    case "SET_FORM_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

const defaultValuesByType = {
  text: "",
  date: new Date(),
  tags: [],
  number: 0,
  textarea: "",
  select: "",
  email: "",
  password: "",
};

const getInitialValues = (schema: FormSchema, defaultValues: FormValues) =>
  schema.fields.reduce(
    (acc, { name, defaultValue, type }) => ({
      ...acc,
      [name]: defaultValue ?? defaultValues[name] ?? defaultValuesByType[type],
    }),
    {}
  );

function JsonForm(
  { onSubmit, schema, defaultValues = {}, children, ...rest }: JsonFormProps,
  ref?: React.Ref<HTMLFormElement>
) {
  const [state, dispatch] = useReducer(formStateReducer, {
    values: getInitialValues(schema, defaultValues),
    errors: {},
    isValidating: false,
    isSubmitting: false,
  });

  const handleChange = (field: string, value: unknown) => {
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: {
        field,
        value,
      },
    });
  };

  const handleReset = () => {
    dispatch({
      type: "SET_FORM_VALUES",
      payload: getInitialValues(schema, defaultValues),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const errors = (await schema.fields
        .filter(({ validate }) => validate)
        .reduce(async (formErrors, { name, validate }) => {
          const errors: FormErrors = await formErrors;
          if (validate) {
            const fieldErrors = await validate(state.values[name], {
              state,
              validators: {
                email: (value: string) => {
                  const test =
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                      value
                    );
                  if (!test) {
                    return "Email is invalid";
                  }
                  return true;
                },
                required: (value: FieldType): true | string => {
                  if (value === undefined || value === null || value === "") {
                    return "This field is required";
                  }
                  return true;
                },
                minLength:
                  (minLength: number) =>
                  (value: FieldType): true | string => {
                    if ((value as string).length < minLength) {
                      return `This field must be at least ${minLength} characters`;
                    }
                    return true;
                  },
                isDateBeforeNow: (value: Date) => {
                  if (value.getTime() > new Date().getTime()) {
                    return `Date must be before the current date`;
                  }
                  return true;
                },
                isDateBefore: (date: Date) => (value: Date) => {
                  if (value.getTime() > date.getTime()) {
                    return `Date must be before ${date.toDateString()}`;
                  }
                  return true;
                },
              },
            });
            if (Array.isArray(fieldErrors)) {
              return {
                ...errors,
                [name]: [
                  ...(errors[name] ?? []),
                  ...fieldErrors.filter((fieldError) => fieldError !== true),
                ],
              };
            } else if (fieldErrors !== true) {
              return {
                ...errors,
                [name]: [...(errors[name] ?? []), fieldErrors],
              };
            }
            return errors;
          }
          return errors;
        }, Promise.resolve({}))) as FormErrors;
      if (Object.values(errors).length) {
        dispatch({
          type: "SET_FORM_ERRORS",
          payload: errors,
        });
      } else {
        onSubmit(state.values);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      onReset={handleReset}
      direction="column"
      {...rest}
      ref={ref}
    >
      {schema.fields.map(({ type, label, name, placeholder, autoFocus }) => {
        const fieldProps = {
          key: name,
          label,
          name,
          autoFocus,
          placeholder,
          onChange: (value: unknown) => handleChange(name, value),
          ...(state.errors[name] && { errors: state.errors[name] }),
        };
        switch (type) {
          case "text":
          case "email":
            const text = state.values[name] as string;
            return <TextField {...fieldProps} type="text" value={text} />;
          case "date":
            const date = state.values[name] as Date;
            return <DateField {...fieldProps} value={date} />;
          case "tags":
            const tags = state.values[name] as string[];
            return <TagsField {...fieldProps} value={tags} />;
          default:
            return null;
        }
      })}
      {children ? (
        children
      ) : (
        <Button type="submit" variant="primary">
          Submit
        </Button>
      )}
    </Form>
  );
}

const ForwardedJsonForm = forwardRef(JsonForm);

export { ForwardedJsonForm as JsonForm };
