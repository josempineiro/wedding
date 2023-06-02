import GuestsList from "@/components/wedding/guests/list/GuestsList";
import { CreateGuestFAButton } from "@/components/wedding/guests/actions/CreateGuestFAButton";
import { useGuests } from "@/hooks/wedding/use-cases/useGuests";

export default function Guests() {
  const { data, loading } = useGuests();

  return (
    <main
      className={`container mx-auto flex flex-col items-center justify-between p-2`}
    >
      <h1>Guests</h1>
      <CreateGuestFAButton />
      {loading && <p>Loading ...</p>}
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
