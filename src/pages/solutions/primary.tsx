import React from "react";
import Head from "next/head";

import PrimaryLayout from "@/layouts/PrimaryLayout";
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

const SolutionsPrimary = () => {
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
        <title>Our Solutions | Track 360</title>
      </Head>
      <PrimaryLayout>
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
      </PrimaryLayout>
    </>
  );
};

export default SolutionsPrimary;
