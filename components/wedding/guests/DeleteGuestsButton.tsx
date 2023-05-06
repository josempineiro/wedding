import { Guest } from "@/domain/wedding/entities/Guest";
import { Button, type ButtonProps } from "@/components/core/buttons/Button";
import { useDeleteGuests } from "@/hooks/wedding/use-cases/useDeleteGuests";

interface Props extends ButtonProps {
  guests: Guest[];
}

export const DeleteGuestsButton = ({ children, guests }: Props) => {
  const { mutate: deleteGuests } = useDeleteGuests();
  const handleClick = () => deleteGuests(guests);
  return (
    <Button type="button" onClick={handleClick}>
      {children}
    </Button>
  );
};
