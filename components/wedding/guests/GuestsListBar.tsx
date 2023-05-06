import { StickyBar } from "@/components/core/content/sticky-bar/StickyBar";
import { useList } from "@/components/core/content/list/ListProvider";
import { Guest, GuestId } from "@/domain/wedding/entities/Guest";
import { DeleteGuestsButton } from "@/components/wedding/guests/DeleteGuestsButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { GuestTagger } from "@/components/wedding/guests/GuestTagger";

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

  return (
    <StickyBar position="bottom">
      <div className="w-full flex items-center justify-between">
        <div
          className="flex items-center justify-center w-8 h-8 mr-2 text-sm text-white bg-gray-500 rounded-full cursor-pointer"
          onClick={handleSelectAll}
        >
          {selectedGuests.length}
        </div>
        <GuestTagger guests={selectedGuests} />
        <DeleteGuestsButton guests={selectedGuests}>
          <FontAwesomeIcon icon={faUserMinus} />
        </DeleteGuestsButton>
      </div>
    </StickyBar>
  );
}
