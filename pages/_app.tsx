import { useState } from "react";
import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Layout from "@/components/Layout";
import { WeddingApplicationProvider } from "@/components/wedding/application/WeddingApplication";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
  );
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <WeddingApplicationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WeddingApplicationProvider>
    </SessionContextProvider>
  );
}

export default App;
