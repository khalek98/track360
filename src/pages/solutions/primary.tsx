import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

import Main from "@/sections/Solutions/Primary/Main";
import AffiliateManager from "@/sections/Solutions/Primary/AffiliateManager";
import Reporting from "@/sections/Solutions/Primary/Reporting";
import MarketingTools from "@/sections/Solutions/Primary/MarketingTools";
import DealsManager from "@/sections/Solutions/Primary/DealsManager";
import PaymentModules from "@/sections/Solutions/Primary/PaymentModules";
import Compliance from "@/sections/Solutions/Primary/Compliance";
import OrganizationManager from "@/sections/Solutions/Primary/OrganizationManager";
import Communicator from "@/sections/Solutions/Primary/Communicator";
import Trigger from "@/sections/Trigger";
const MainLayout = dynamic(() => import("@/layouts/MainLayout"));

const SolutionsPrimary = () => {
  const { t } = useTranslation("solutions");
  return (
    <>
      <Head>
        <link rel="manifest" href="../favicons/manifest.json" />
        <link rel="icon" href="../favicons/favicon.svg" type="image/svg+xml" />
        <title>{t("primary.head")} | Track 360</title>
      </Head>
      <MainLayout>
        <Main />
        <AffiliateManager />
        <Reporting />
        <MarketingTools />
        <DealsManager />
        <Trigger />
        <PaymentModules />
        <Compliance />
        <OrganizationManager />
        <Communicator />
      </MainLayout>
    </>
  );
};

export default SolutionsPrimary;
