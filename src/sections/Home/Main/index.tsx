import React from "react";
import cn from "classnames";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import styles from "./Main.module.scss";
import ArrowLink from "@/components/ArrowLink";

const Main: React.FC = () => {
  const { t } = useTranslation(["home", "buttons"]);

  return (
    <section className={styles.Main}>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_1)}>
        <div className={cn(styles.CircleFilled, styles.CircleFilled_1)}></div>
      </div>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_2)}></div>
      <ArrowLink arrowLink="about" />

      <div className="container">
        <div className={styles.MainWrapper}>
          <h1 className={styles.Title} dangerouslySetInnerHTML={{ __html: t("main.title") }}>
            {/* Maximize <span>Your</span> Success */}
          </h1>
          <p className={styles.Text} dangerouslySetInnerHTML={{ __html: t("main.subtitle") }}>
            {/* Track 360 is the most feature-rich, enabling <span>affiliate management software</span>{" "}
            available today. With an unrivaled level of functionality, you can perform{" "}
            <span>more actions</span> than ever before. */}
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
                    <a
                      href="solutions/primary#payment"
                      className={styles.MiddleMenuLink}
                      dangerouslySetInnerHTML={{ __html: t("menu.payment") }}
                    >
                      {/* Payment Module */}
                    </a>
                  </Fade>
                  <Fade top delay={300}>
                    <a
                      href="solutions/primary#compliance"
                      className={styles.MiddleMenuLink}
                      dangerouslySetInnerHTML={{ __html: t("menu.compliance") }}
                    >
                      {/* Compliance */}
                    </a>
                  </Fade>
                  <Fade top delay={200}>
                    <a
                      href="solutions/primary#communicator"
                      className={styles.MiddleMenuLink}
                      dangerouslySetInnerHTML={{ __html: t("menu.communicator") }}
                    >
                      {/* Communicator */}
                    </a>
                  </Fade>
                  <Fade top delay={100}>
                    <a
                      href="solutions/primary#organization"
                      className={styles.MiddleMenuLink}
                      dangerouslySetInnerHTML={{ __html: t("menu.organization") }}
                    >
                      {/* Organization Manager */}
                    </a>
                  </Fade>
                </div>

                <a
                  href="solutions/primary#affiliate"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_1)}
                >
                  {t("menu.affiliate")}
                  {/* affiliate manager */}
                </a>

                <a
                  href="solutions/primary#reporting"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_2)}
                >
                  {t("menu.reporting")}
                  {/* Reports */}
                </a>

                <a
                  href="solutions/primary#marketing"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_3)}
                >
                  {t("menu.marketing")}
                  {/* marketing tools */}
                </a>
                <a
                  href="solutions/primary#deals"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_4)}
                  dangerouslySetInnerHTML={{ __html: t("menu.deals") }}
                >
                  {/* deals manager */}
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
