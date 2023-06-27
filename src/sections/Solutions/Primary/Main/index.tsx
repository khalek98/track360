import React from "react";
import cn from "classnames";

import styles from "./Main.module.scss";
import ArrowLink from "@/components/ArrowLink";

const Main = () => {
  return (
    <section className={styles.Main}>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_1)}></div>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_2)}>
        <div className={styles.Inner}>
          <div className={cn(styles.CircleFilled, styles.CircleFilled_2)}></div>
        </div>
      </div>

      <ArrowLink arrowLink="affiliate" />
      <div className="container">
        <div className={styles.MainWrapper}>
          <h1 className={styles.Subtitle}>solutions</h1>
          <h2 className={styles.Title}>Track 360</h2>
          <p className={styles.Text}>
            Track 360 stands as the ultimate <span>affiliate management software</span> available
            today, offering an extensive range of features. Experience an unparalleled level of
            functionality, empowering you to carry out a multitude of actions like never before.
          </p>
          <p className={styles.Text}>
            Moreover, Track 360 delivers profoundly detailed reports, enabling you to uncover the{" "}
            <span>true value of your affiliates!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
