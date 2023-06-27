import React, { FC } from "react";
import Head from "next/head";

import { Footer, Header } from "@/components";
import { useAppContext } from "@/context/AppContext";
import ContactUsPopUp from "@/components/ContactUsPopUp/indes";
import RequestDemo from "@/components/RequestDemo";

interface ILayoutProps {
  children: React.ReactNode;
  darkMode?: boolean;
}

const PrimaryLayout: FC<ILayoutProps> = ({ children, darkMode }) => {
  const { showContactUs, showRequestDemo } = useAppContext();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Track 360 is the most feature-rich, enabling affiliate management software available today. With an unrivaled level of functionality, you can perform more actionsthan ever before."
        />
        <link rel="icon" href="favicons/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header darkMode={darkMode} />
      {children}
      <Footer />

      {showContactUs && <ContactUsPopUp />}
      {showRequestDemo && <RequestDemo />}
    </>
  );
};

export default PrimaryLayout;
