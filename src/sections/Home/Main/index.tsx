import React from "react";
import cn from "classnames";
import { Fade, Zoom } from "react-reveal";

import styles from "./Main.module.scss";
import ArrowLink from "@/components/ArrowLink";

const Main = () => {
  return (
    <section className={styles.Main}>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_1)}>
        <div className={cn(styles.CircleFilled, styles.CircleFilled_1)}></div>
      </div>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_2)}>
        <div className={styles.Inner}>
          <div className={cn(styles.CircleFilled, styles.CircleFilled_2)}></div>
        </div>
      </div>
      <ArrowLink arrowLink="about" />

      <div className="container">
        <div className={styles.MainWrapper}>
          <h1 className={styles.Title}>
            Maximize <span>Your Affiliate</span> Success
          </h1>
          <p className={styles.Text}>
            Track 360 is powered by <span className={styles.SpanStyled}>Proline Ltd</span>, based in
            Tel Aviv, Israel. Established in 2017, Proline&apos;s Team has over{" "}
            <span>20 years of R&D experience.</span>
          </p>
          <p className={styles.Text}>
            Comprised of experienced marketers and software developers, Proline is dedicated to
            providing the best and most feature-rich{" "}
            <span className={styles.SpanStyled}>affiliate software</span> on the market.
          </p>

          <div className={styles.MiddleMenuWrapp}>
            <div className={styles.MiddleMenuInner}>
              <div className={styles.FiledCircle}></div>
              <div className={styles.FiledCircle}></div>
            </div>
            <div className={styles.DashedBg}>
              <div className={styles.FildeBg}>
                <div className={styles.ArrowInner}></div>

                <div className={styles.MiddleMenu}>
                  <Fade top delay={400}>
                    <a href="solutions/primary#payment" className={styles.MiddleMenuLink}>
                      Payment Modules
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
