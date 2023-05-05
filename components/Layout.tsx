import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const LogoutButton = () => {
  const supabase = useSupabaseClient();
  const logout = async () => {
    const result = await supabase.auth.signOut();
    alert(result.error);
  };
  return <button onClick={logout}>Logout</button>;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
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
