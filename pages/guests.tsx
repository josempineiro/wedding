import GuestsList from "@/components/wedding/guests/GuestsList";
import GuestCreationForm from "@/components/wedding/guests/GuestCreationForm";
import { useGuests } from "@/hooks/wedding/use-cases/useGuests";

export default function Guests() {
  const { data, isLoading } = useGuests();

  return (
    <main className={`flex flex-col items-center justify-between p-2`}>
      <h1>Guests</h1>
      <GuestCreationForm />
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
