import Head from "next/head";
import React from "react";

import PrimaryLayout from "@/layouts/PrimaryLayout";
import Main from "@/sections/AboutUs/Main";
import Team from "@/sections/AboutUs/Team";
import Testimonial from "@/sections/AboutUs/Testimonial";
import Partnership from "@/sections/AboutUs/Partnership";

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
      <PrimaryLayout>
        <Main />
        <Team />
        <Testimonial />
        <Partnership />
      </PrimaryLayout>
    </>
  );
};

export default AboutPage;
