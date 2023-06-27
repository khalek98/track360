import React from "react";
import cn from "classnames";

import styles from "./Main.module.scss";
import MainSectionLayout from "@/layouts/MainSectionLayout/MainSectionLayout";

const Main = () => {
  return (
    <section className={styles.Main}>
      <MainSectionLayout circle={false} arrowLink="team" />
      <div className="container">
        <div className={styles.MainWrapper}>
          <h1 className={styles.Subtitle}>who we are</h1>
          <h2 className={styles.Title}>
            About <span>Track 360</span>
          </h2>
          <p className={styles.Text}>
            Track 360 is powered by <span className={styles.SpanStyled}>Proline Ltd</span>, based in
            Tel Aviv, Israel. Established in 2017, Proline has over{" "}
            <span>20 years of R&D experience.</span>
          </p>
          <p className={styles.Text}>
            Comprised of experienced marketers and software developers, Proline is dedicated to
            providing the best and most feature-rich{" "}
            <span className={styles.SpanStyled}>affiliate software</span> on the market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
