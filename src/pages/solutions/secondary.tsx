import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Integration from "@/sections/Solutions/Secondary/Integration";
import Migration from "@/sections/Solutions/Secondary/Migration";
import Trigger from "@/sections/Trigger";
import Installations from "@/sections/Solutions/Secondary/Installations";
const MainLayout = dynamic(() => import("@/layouts/MainLayout"));

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        "home",
        "buttons",
        "footer",
        "solutions",
        "forms",
      ])),
    },
  };
};

const SolutionsSecondary = () => {
  return (
    <>
      <Head>
        <link rel="manifest" href="../favicons/manifest.json" />
        <link rel="icon" href="../favicons/favicon.svg" type="image/svg+xml" />
        <title>Our Solutions | Track 360</title>
      </Head>
      <MainLayout darkMode={true}>
        <Installations />
        <Trigger />
        <Migration />
        <Integration />
      </MainLayout>
    </>
  );
};

export default SolutionsSecondary;
