import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Main from "@/sections/Home/Main";
import About from "@/sections/Home/About";
import Solutions from "@/sections/Home/Solutions";
import Trigger from "@/sections/Trigger";
import Choose from "@/sections/Home/Choose";
const MainLayout = dynamic(() => import("@/layouts/MainLayout"), { ssr: false });

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["home", "buttons", "footer", "forms"])),
    },
  };
};

const Home: React.FC = (_props) => {
  return (
    <>
      <Head>
        <title>Track 360</title>
      </Head>
      <MainLayout>
        <Main />
        <About />
        <Solutions />
        <Trigger />
        <Choose />
      </MainLayout>
    </>
  );
};

export default Home;
