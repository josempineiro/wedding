import React, { useState } from "react";
import { Guest, GuestId } from "@/domain/wedding/entities/Guest";
import { useTagGuests } from "@/hooks/wedding/use-cases/useTagGuests";

interface Props {
  guests: Guest[];
}

export const GuestTagger: React.FC<Props> = ({ guests }) => {
  const [tagInputValue, setTagInputValue] = useState("");
  const { mutate: tagGuests } = useTagGuests();

  const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const tag = tagInputValue.trim();
      debugger;
      tagGuests({
        guests,
        tag,
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={tagInputValue}
        onChange={handleTagInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
