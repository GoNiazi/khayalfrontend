import "../styles/vendor.min.css";

import "../styles/theme.min.css";

import "react-multi-carousel/lib/styles.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { API_URL } from "../url";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: `${API_URL}/graphql`,
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Script
        id="themes"
        type="text/javascript"
        src="/js/vendor.min.js"
      ></Script>
      <Script id="theme" type="text/javascript" src="/js/theme.min.js"></Script>
      <Script
        id="shadow"
        type="text/javascript"
        src="/js/navbar_shadow.min.js"
      ></Script>
    </>
  );
}

export default MyApp;
