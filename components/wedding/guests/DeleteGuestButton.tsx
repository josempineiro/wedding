import { Guest } from "@/domain/wedding/entities/Guest";
import { Button, type ButtonProps } from "@/components/core/buttons/Button";
import { useDeleteGuests } from "@/hooks/wedding/use-cases/useDeleteGuests";

interface Props extends ButtonProps {
  guest: Guest;
}
export const DeleteGuestButton = ({ guest, children, ...props }: Props) => {
  const { mutate: deleteGuests } = useDeleteGuests();
  const handleClick = () => deleteGuests([guest]);
  return (
    <Button type="button" onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};
