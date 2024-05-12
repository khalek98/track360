import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

import Integration from "@/sections/Solutions/Secondary/Integration";
import Migration from "@/sections/Solutions/Secondary/Migration";
import Trigger from "@/sections/Trigger";
import Installations from "@/sections/Solutions/Secondary/Installations";
const MainLayout = dynamic(() => import("@/layouts/MainLayout"));

const SolutionsSecondary = () => {
  const { t } = useTranslation("solutions");

  return (
    <>
      <Head>
        <link rel="manifest" href="../favicons/manifest.json" />
        <link rel="icon" href="../favicons/favicon.svg" type="image/svg+xml" />
        <title>{t("secondary.head")} | Track 360</title>
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
