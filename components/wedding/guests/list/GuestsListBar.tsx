import { Bar } from "@/components/core/content/bar/Bar";
import { useList } from "@/components/core/content/list/ListProvider";
import { Guest, GuestId } from "@/domain/wedding/entities/Guest";
import { DeleteGuestsButton } from "@/components/wedding/guests/actions/DeleteGuestsButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { GuestTagger } from "@/components/wedding/guests/forms/GuestTagger";

export function GuestsListBar({ guests }: { guests: Guest[] }) {
  const {
    selection: {
      selectedItems: selectedGuests,
      clear,
      selectAll: selectAllGuests,
    },
  } = useList<Guest, GuestId>();
  const handleSelectAll = () => {
    if (selectedGuests.length === guests.length) {
      clear();
    } else {
      selectAllGuests();
    }
  };

  const thereAreSelectedGuests = selectedGuests.length > 0;
  if (!thereAreSelectedGuests) {
    return null;
  }
  return (
    <Bar position="bottom" behavior="fixed">
      <div className="w-full flex items-center justify-between p-4">
        <div
          className="flex items-center justify-center w-8 h-8 mr-2 text-sm text-white bg-gray-500 rounded-full cursor-pointer"
          onClick={handleSelectAll}
        >
          {selectedGuests.length}
        </div>
        <DeleteGuestsButton guests={selectedGuests}>
          <FontAwesomeIcon className="h-4 w-4" icon={faUserMinus} />
        </DeleteGuestsButton>
      </div>
    </Bar>
  );
}
