import { Guest } from "@/domain/wedding/entities/Guest";
import { Button, type ButtonProps } from "@/components/core/buttons/Button";
import { useUpdateGuest } from "@/hooks/wedding/use-cases/useUpdateGuest";

interface Props extends ButtonProps {
  guest: Guest;
}

export const UpdateGuestButton = ({
  guest,
  onClick,
  children,
  ...rest
}: Props) => {
  const { mutate: updateGuest } = useUpdateGuest();
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    updateGuest(guest);
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <Button type="button" onClick={handleClick} {...rest}>
      {children}
    </Button>
  );
};
