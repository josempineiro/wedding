import React, { useState } from "react";
import { Guest } from "@/domain/wedding/entities/Guest";
import { useTagGuests } from "@/hooks/wedding/use-cases/useTagGuests";
import { Button } from "@/components/core/buttons/Button";
import { Modal } from "@/components/core/content/modal/Modal";
import { TextField } from "@/components/core/forms/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTag } from "@fortawesome/free-solid-svg-icons";

interface Props {
  guests: Guest[];
}

export const GuestTagger: React.FC<Props> = ({ guests }) => {
  const [tagInputValue, setTagInputValue] = useState<string | null>(null);
  const { mutate: tagGuests } = useTagGuests();

  const handleTagInputChange = (tag: string) => {
    setTagInputValue(tag);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && tagInputValue !== null) {
      const tag = tagInputValue.trim();
      tagGuests({
        guests,
        tag,
      });
    }
  };

  const handleSave = () => {
    if (tagInputValue !== null) {
      const tag = tagInputValue.trim();
      tagGuests({
        guests,
        tag,
      });
    }
  };

  return (
    <>
      <Button onClick={() => setTagInputValue("")}>
        <FontAwesomeIcon icon={faUserTag} />
      </Button>
      <Modal
        title={`Tag to ${guests.map((guest) => guest.name).join(", ")}`}
        visible={tagInputValue !== null}
        onClose={() => setTagInputValue(null)}
        size="md"
      >
        <div className="flex flex-col gap-4">
          <TextField
            type="text"
            name="tag"
            value={tagInputValue || ""}
            onChange={handleTagInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Write a tag and press enter"
            autoFocus
          />
          <Button onClick={handleSave} variant="primary">
            Add tag
          </Button>
        </div>
      </Modal>
    </>
  );
};
