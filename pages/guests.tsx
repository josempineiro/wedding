import GuestsList from "@/components/wedding/guests/GuestsList";
import { CreateGuestFAButton } from "@/components/wedding/guests/CreateGuestFAButton";
import { useGuests } from "@/hooks/wedding/use-cases/useGuests";

export default function Guests() {
  const { data, isLoading } = useGuests();

  return (
    <main className={`flex flex-col items-center justify-between p-2`}>
      <h1>Guests</h1>
      <CreateGuestFAButton />
      {isLoading && <p>Loading ...</p>}
      {data && (
        <>
          <div>
            <p>Total: {data.length}</p>
          </div>
          <GuestsList guests={data} />
        </>
      )}
    </main>
  );
}
