import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "@/components/core/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = () => {
  const supabase = useSupabaseClient();
  const logout = async () => {
    const result = await supabase.auth.signOut();
    alert(result.error);
  };
  return (
    <Button onClick={logout} className="fixed top-4 right-4">
      <FontAwesomeIcon icon={faRightFromBracket} />
    </Button>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <div className="container mx-auto pt-20 pb-40">
      {!session ? (
        <Auth
          providers={[]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <>
          <LogoutButton />
          {children}
        </>
      )}
    </div>
  );
};

export default Layout;
