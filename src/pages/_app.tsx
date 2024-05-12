import type { AppProps } from "next/app";

import { AppContextProvider } from "../context/AppContext";

import "@/styles/index.scss";
import "../i18n/config";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default App;
