import React from "react";
import cn from "classnames";
import { Fade } from "react-reveal";

import styles from "./Main.module.scss";
import ArrowLink from "@/components/ArrowLink";

const Main = () => {
  return (
    <section className={styles.Main}>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_1)}>
        <div className={cn(styles.CircleFilled, styles.CircleFilled_1)}></div>
      </div>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_2)}></div>
      <ArrowLink arrowLink="about" />

      <div className="container">
        <div className={styles.MainWrapper}>
          <h1 className={styles.Title}>
            Maximize <span>Your Affiliate</span> Success
          </h1>
          <p className={styles.Text}>
            Track 360 is the most feature-rich, enabling <span>affiliate management software</span>{" "}
            available today. With an unrivaled level of functionality, you can perform{" "}
            <span>more actions</span> than ever before.
          </p>

          <div className={styles.MiddleMenuWrapp}>
            <div className={styles.MiddleMenuInner}>
              <div className={cn(styles.FiledCircle, styles.FiledCircle_1)}></div>
              <div className={cn(styles.FiledCircle, styles.FiledCircle_2)}></div>
              <div className={cn(styles.FiledCircle, styles.FiledCircle_3)}></div>
              <div className={cn(styles.FiledCircle, styles.FiledCircle_4)}></div>
            </div>
            <div className={styles.DashedBg}>
              <div className={styles.DashedBgInner}>
                <div className={cn(styles.FiledCircle, styles.FiledCircle_5)}></div>
                <div className={cn(styles.FiledCircle, styles.FiledCircle_6)}></div>
              </div>

              <div className={styles.FiledBg}>
                <div className={styles.ArrowInner}></div>

                <div className={styles.MiddleMenu}>
                  <Fade top delay={400}>
                    <a href="solutions/primary#payment" className={styles.MiddleMenuLink}>
                      Payment Module
                    </a>
                  </Fade>
                  <Fade top delay={300}>
                    <a href="solutions/primary#compliance" className={styles.MiddleMenuLink}>
                      Compliance
                    </a>
                  </Fade>
                  <Fade top delay={200}>
                    <a href="solutions/primary#communicator" className={styles.MiddleMenuLink}>
                      Communicator
                    </a>
                  </Fade>
                  <Fade top delay={100}>
                    <a href="solutions/primary#organization" className={styles.MiddleMenuLink}>
                      Organization Manager
                    </a>
                  </Fade>
                </div>

                <a
                  href="solutions/primary#affiliate"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_1)}
                >
                  affiliate manager
                </a>

                <a
                  href="solutions/primary#reporting"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_2)}
                >
                  Reports
                </a>

                <a
                  href="solutions/primary#marketing"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_3)}
                >
                  marketing tools
                </a>
                <a
                  href="solutions/primary#deals"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_4)}
                >
                  deals manager
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
