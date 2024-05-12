import Head from "next/head";
import React from "react";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "@/layouts/MainLayout";
import Main from "@/sections/AboutUs/Main";
import Team from "@/sections/AboutUs/Team";
import Testimonial from "@/sections/AboutUs/Testimonial";
import Partnership from "@/sections/AboutUs/Partnership";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        "home",
        "buttons",
        "footer",
        "about",
        "forms",
      ])),
    },
  };
};

const AboutPage = () => {
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
        <title>About Us | Track 360</title>
      </Head>
      <MainLayout>
        <Main />
        <Team />
        <Testimonial />
        <Partnership />
      </MainLayout>
    </>
  );
};

export default AboutPage;
