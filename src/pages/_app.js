import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { TurmaProvider } from "@/context/TurmaContext";

export default function App({ Component, pageProps }) {
  return (
    <TurmaProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TurmaProvider>
  );
}
