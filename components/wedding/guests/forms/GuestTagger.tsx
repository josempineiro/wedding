import React, { useState } from "react";
import { Guest } from "@/domain/wedding/entities/Guest";
import { useTagGuests } from "@/hooks/wedding/use-cases/useTagGuests";
import { Button } from "@/components/core/buttons/Button";
import { Modal } from "@/components/core/content/modal/Modal";
import { TagsField } from "@/components/core/forms/tags-field/TagsField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTag } from "@fortawesome/free-solid-svg-icons";

interface Props {
  guests: Guest[];
}

export const GuestTagger: React.FC<Props> = ({ guests }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { mutate: tagGuests } = useTagGuests();

  const handleAddTag = (tag: string) => {
    tagGuests({
      guests,
      tag,
    });
  };

  return (
    <>
      <Button onClick={() => setModalVisible(true)}>
        <FontAwesomeIcon icon={faUserTag} />
      </Button>
      <Modal
        title={`Tag to ${guests.map((guest) => guest.name).join(", ")}`}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        size="md"
      >
        <div className="flex flex-col gap-4">
          <TagsField
            type="text"
            name="guest-tags"
            label="Guest tags"
            value={[]}
            onAdd={handleAddTag}
            onChange={() => {}}
            placeholder="Write a tag and press enter"
            autoFocus
          />
        </div>
      </Modal>
    </>
  );
};
