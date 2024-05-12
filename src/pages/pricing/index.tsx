import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Main from "@/sections/Pricing/Main";
import Trigger from "@/sections/Pricing/Trigger";
const MainLayout = dynamic(() => import("@/layouts/MainLayout"));
const Solutions = dynamic(() => import("@/sections/Pricing/Solutions"));

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        "home",
        "buttons",
        "footer",
        "price",
        "forms",
      ])),
    },
  };
};

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
        <title>Pricing | Track 360</title>
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
