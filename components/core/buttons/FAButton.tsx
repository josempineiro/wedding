import { Button, type ButtonProps } from "@/components/core/buttons/Button";

export function FAButton(props: ButtonProps) {
  return (
    <Button
      variant="primary"
      rounded
      className="fixed bottom-4 right-4 shadow-lg"
      {...props}
    />
  );
}
