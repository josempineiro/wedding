import { Header } from "@/components/core/application/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/core/buttons/Button";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const LogoutButton = () => {
  const supabase = useSupabaseClient();
  const logout = async () => {
    const result = await supabase.auth.signOut();
    alert(result.error);
  };
  return (
    <Button rounded onClick={logout}>
      <FontAwesomeIcon className="h-4 w-4" icon={faRightFromBracket} />
    </Button>
  );
};

export function WeddingHeader() {
  return (
    <Header>
      <div className="flex flex-row flex-1 items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Wedding</h1>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <LogoutButton />
      </div>
    </Header>
  );
}
