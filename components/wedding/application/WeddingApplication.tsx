import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SupabaseGuestRepository } from "@/infrastructure/adapters/SupabaseGuestRepository";
import { WeddingApplication } from "@/domain/wedding/application/WeddingApplication";
import { ApplicationProvider } from "@/components/core/application/Application";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

export function WeddingApplicationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const weddingApplication = useMemo(() => {
    const supabase = createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    });

    const guestRepository = new SupabaseGuestRepository(supabase);

    const weddingApplication = new WeddingApplication({
      adapters: {
        guestRepository,
      },
    });
    return weddingApplication;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider application={weddingApplication}>
        {children}
      </ApplicationProvider>
    </QueryClientProvider>
  );
}
