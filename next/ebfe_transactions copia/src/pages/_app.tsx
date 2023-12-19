import "@/styles/globalsT.css";
import type { AppProps } from "next/app";
import { Providers } from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
