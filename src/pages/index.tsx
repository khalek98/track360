import React from "react";

import Main from "@/sections/Home/Main";
import About from "@/sections/Home/About";
import Solutions from "@/sections/Home/Solutions";
import Trigger from "@/sections/Trigger";
import Choose from "@/sections/Home/Choose";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";

const Home = () => {
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
