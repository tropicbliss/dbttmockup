import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/components/Header";
import { useRouter } from "next/router";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { asPath } = useRouter();

  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="medical, tech" />
        <meta
          name="description"
          content="Data to enrich your medical business"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Eldertechnovators</title>
      </Head>
      {asPath !== "/" && <Header />}
      <div className="mx-auto max-w-7xl pb-3 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
