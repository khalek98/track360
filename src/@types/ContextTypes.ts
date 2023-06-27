import { Dispatch, ReactNode, SetStateAction } from "react";

export type AppContextType = {
  sendForm: SendFormType;
  setSendForm: Dispatch<SetStateAction<SendFormType>>;
  pathname: string;
  showContactUs: boolean;
  setShowContactUs: Dispatch<SetStateAction<boolean>>;
  showRequestDemo: boolean;
  setShowRequestDemo: Dispatch<SetStateAction<boolean>>;
};

export type AppContextProps = {
  children: ReactNode;
};

export type SendFormType = "hold" | "success" | "error";
