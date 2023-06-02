import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { WeddingProvider } from "@/components/wedding/weddings/WeddingProvider";
import { useSession } from "@/infrastructure/supabase/authentication/SessionContext";
import { Session } from "@supabase/supabase-js";

const createSupabaseApolloClient = (session: Session) =>
  new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
    cache: new InMemoryCache(),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    },
  });

export function WeddingApplicationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useSession();

  return (
    <ApolloProvider client={createSupabaseApolloClient(session)}>
      <WeddingProvider>{children}</WeddingProvider>
    </ApolloProvider>
  );
}
