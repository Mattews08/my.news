import { AppProps } from "next/app";
import "../styles/global.scss";
import {Header1} from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header1 />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
