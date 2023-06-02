import { useRef, cloneElement } from "react";
import { Wedding } from "@/domain/wedding/entities/Wedding";
import { useCreateWedding } from "@/hooks/wedding/use-cases/useCreateWedding";
import { Button, ButtonProps } from "@/components/core/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {
  WeddingForm,
  WeddingFormProps,
} from "@/components/wedding/weddings/forms/WeddingForm";

interface WeddingCreationFormProps
  extends Omit<WeddingFormProps, "onSubmit" | "wedding" | "children"> {
  onCompleted: () => void;
  children: React.ReactElement;
}

interface WeddingCreationSubmitButtonProps
  extends Omit<ButtonProps, "children"> {
  loading?: boolean;
}

export function WeddingCreationSubmitButton({
  loading,
  disabled,
  ...rest
}: WeddingCreationSubmitButtonProps) {
  return (
    <Button
      disabled={loading || disabled}
      type="submit"
      variant="primary"
      {...rest}
    >
      <span>Create</span>
      <FontAwesomeIcon className="h-4 w-4" icon={faUserPlus} />
    </Button>
  );
}

export function WeddingCreationForm({
  onCompleted,
  children = <WeddingCreationSubmitButton />,
  ...rest
}: WeddingCreationFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [createWedding, { loading }] = useCreateWedding({
    onCompleted: () => {
      if (formRef.current) {
        formRef.current.reset();
      }
      onCompleted();
    },
  });

  const handleSubmit = async (wedding: Wedding) => {
    createWedding(wedding);
  };

  return (
    <WeddingForm
      onSubmit={handleSubmit}
      ref={formRef}
      editableFields={["name", "datetime"]}
      wedding={Wedding.create({
        name: "",
      })}
      {...rest}
    >
      {cloneElement(children as React.ReactElement, {
        disabled: loading,
      })}
    </WeddingForm>
  );
}
