import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { AppContextProvider } from "../context/AppContext";

import "@/styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default appWithTranslation(App);
