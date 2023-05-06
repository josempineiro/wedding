import { Guest } from "@/domain/wedding/entities/Guest";
import { Button } from "@/components/core/buttons/Button";
import { useDeleteGuest } from "@/hooks/wedding/use-cases/useDeleteGuest";

export const DeleteGuestButton = ({ guest }: { guest: Guest }) => {
  const { mutate: deleteGuest } = useDeleteGuest();
  const handleClick = () => deleteGuest(guest);
  return <Button onClick={handleClick}>Delete</Button>;
};
