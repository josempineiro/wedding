import { Guest } from "@/domain/wedding/entities/Guest";
import { useAddGuest } from "@/hooks/wedding/use-cases/useAddGuest";

function GuestCreationForm() {
  const { mutate: addGuest, isLoading } = useAddGuest();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    addGuest(
      Guest.create({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        weddingId: "95f2e638-0023-4316-8868-6550f9bf1db3",
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        e-mail:
        <input type="email" name="email" />
      </label>
      <br />
      <button disabled={isLoading} type="submit">
        {"Add"}
      </button>
    </form>
  );
}

export default GuestCreationForm;
