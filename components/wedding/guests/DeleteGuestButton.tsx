import { Guest } from "@/domain/wedding/entities/Guest";
import { Button } from "@/components/core/buttons/Button";
import { useDeleteGuest } from "@/hooks/wedding/use-cases/useDeleteGuest";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  guest: Guest;
}
export const DeleteGuestButton = ({ guest }: Props) => {
  const { mutate: deleteGuest } = useDeleteGuest();
  const handleClick = () => deleteGuest(guest);
  return <Button onClick={handleClick}>Delete</Button>;
};
