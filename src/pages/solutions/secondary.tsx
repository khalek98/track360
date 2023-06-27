import React from "react";
import Head from "next/head";

import PrimaryLayout from "@/layouts/PrimaryLayout";
import Integration from "@/sections/Solutions/Secondary/Integration";
import Migration from "@/sections/Solutions/Secondary/Migration";
import Trigger from "@/sections/Trigger";
import Installations from "@/sections/Solutions/Secondary/Installations/indesx";

const SolutionsSecondary = () => {
  return (
    <>
      <Head>
        <title>Our Solutions | Track 360</title>
      </Head>
      <PrimaryLayout darkMode={true}>
        <Integration />
        <Migration />
        <Trigger />
        <Installations />
      </PrimaryLayout>
    </>
  );
};

export default SolutionsSecondary;
