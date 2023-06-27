import Head from "next/head";
import React from "react";

import MainLayout from "@/layouts/MainLayout";
import Main from "@/sections/Pricing/Main";
import Trigger from "@/sections/Pricing/Trigger";
import Solutions from "@/sections/Pricing/Solutions";

const PricingPage = () => {
  return (
    <>
      <Head>
        <style>
          {`
            body {
              background: linear-gradient(114.65deg, #202833 39.04%, #000000 99.02%);
            }
          `}
        </style>
        <title>Track 360 | Pricing</title>
      </Head>
      <MainLayout>
        <Main />
        <Trigger />
        <Solutions />
      </MainLayout>
    </>
  );
};

export default PricingPage;
