import { createContext, FC, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AppContextProps, AppContextType, SendFormType } from "@/@types/ContextTypes";

export const AppContext = createContext<AppContextType | null>(null);

export function useAppContext() {
  return useContext(AppContext) as AppContextType;
}

export const AppContextProvider: FC<AppContextProps> = ({ children }) => {
  const router = useRouter();

  const [sendForm, setSendForm] = useState<SendFormType>("hold");
  const [pathname, setPathname] = useState<string>(router.pathname);
  const [showContactUs, setShowContactUs] = useState<boolean>(false);
  const [showRequestDemo, setShowRequestDemo] = useState<boolean>(false);

  useEffect(() => {
    setPathname(router.asPath);
  }, [router.asPath]);

  return (
    <AppContext.Provider
      value={{
        sendForm,
        setSendForm,
        pathname,
        showContactUs,
        setShowContactUs,
        showRequestDemo,
        setShowRequestDemo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
