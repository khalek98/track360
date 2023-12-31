import React from "react";
import Head from "next/head";

import MainLayout from "@/layouts/MainLayout";
import Integration from "@/sections/Solutions/Secondary/Integration";
import Migration from "@/sections/Solutions/Secondary/Migration";
import Trigger from "@/sections/Trigger";
import Installations from "@/sections/Solutions/Secondary/Installations/indesx";

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
