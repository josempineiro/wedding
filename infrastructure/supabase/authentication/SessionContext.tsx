import { useState, useEffect, createContext, useContext } from "react";
import { Session } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import { client } from "@/supabase/client";

export const SessionContext = createContext<Session | null>(null);

export const SessionProvider = SessionContext.Provider;

export const useSession = () => {
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return session;
};

export function SupabaseSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  if (!session) {
    return <Auth supabaseClient={client} appearance={{ theme: ThemeSupa }} />;
  } else {
    return <SessionProvider value={session}>{children}</SessionProvider>;
  }
}
