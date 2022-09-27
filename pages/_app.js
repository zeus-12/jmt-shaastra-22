import { MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";
import "../styles/globals.css";
import ScrollObserver from "../utils/ScrollObserver";

function MyApp({ Component, pageProps }) {
  return (
    <ScrollObserver>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ScrollObserver>
  );
}

export default MyApp;
