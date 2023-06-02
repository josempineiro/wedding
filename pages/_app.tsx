import Head from "next/head";
import type { AppProps } from "next/app";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Layout from "@/components/Layout";
import { WeddingApplicationProvider } from "@/components/wedding/application/WeddingApplication";
import { Breadcrumbs } from "@/components/core/application/Breadcrumbs";
import "@/styles/globals.css";
import { client } from "@/supabase/client";
import { SupabaseSessionProvider } from "@/infrastructure/supabase/authentication/SessionContext";
import { WeddingHeader } from "@/components/wedding/application/WeddingHeader";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/great-vibes"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/nunito-sans"
          rel="stylesheet"
        />
      </Head>
      <SessionContextProvider
        supabaseClient={client}
        initialSession={pageProps.initialSession}
      >
        <SupabaseSessionProvider>
          <WeddingApplicationProvider>
            <Layout>
              <WeddingHeader />
              <Breadcrumbs />
              <Component {...pageProps} />
            </Layout>
          </WeddingApplicationProvider>
        </SupabaseSessionProvider>
      </SessionContextProvider>
    </>
  );
}

export default App;
