// @ts-nocheck
import React from "react";
import Link from "next/link";
import cn from "classnames";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";

import styles from "./Main.module.scss";
import ArrowLink from "@/components/ArrowLink";

const Main: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.Main}>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_1)}>
        <div className={cn(styles.CircleFilled, styles.CircleFilled_1)}></div>
      </div>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_2)}></div>
      <ArrowLink arrowLink="about" />

      <div className="container">
        <div className={styles.MainWrapper}>
          <h1
            className={styles.Title}
            dangerouslySetInnerHTML={{ __html: t("main.title", { ns: "home" }) }}
          >
            {/* Maximize <span>Your</span> Success */}
          </h1>
          <p
            className={styles.Text}
            dangerouslySetInnerHTML={{ __html: t("main.subtitle", { ns: "home" }) }}
          >
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
                  <Fade triggerOnce direction="down" delay={400}>
                    <Link
                      href="solutions/primary#payment"
                      className={styles.MiddleMenuLink}
                      dangerouslySetInnerHTML={{ __html: t("menu.payment", { ns: "home" }) }}
                    >
                      {/* Payment Module */}
                    </Link>
                  </Fade>
                  <Fade triggerOnce direction="down" delay={300}>
                    <Link
                      href="solutions/primary#compliance"
                      className={styles.MiddleMenuLink}
                      dangerouslySetInnerHTML={{ __html: t("menu.compliance", { ns: "home" }) }}
                    >
                      {/* Compliance */}
                    </Link>
                  </Fade>
                  <Fade triggerOnce direction="down" delay={200}>
                    <Link
                      href="solutions/primary#communicator"
                      className={styles.MiddleMenuLink}
                      dangerouslySetInnerHTML={{ __html: t("menu.communicator", { ns: "home" }) }}
                    >
                      {/* Communicator */}
                    </Link>
                  </Fade>
                  <Fade triggerOnce direction="down" delay={100}>
                    <Link
                      href="solutions/primary#organization"
                      className={styles.MiddleMenuLink}
                      dangerouslySetInnerHTML={{ __html: t("menu.organization", { ns: "home" }) }}
                    >
                      {/* Organization Manager */}
                    </Link>
                  </Fade>
                </div>

                <Link
                  href="solutions/primary#affiliate"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_1)}
                >
                  {t("menu.affiliate", { ns: "home" })}
                  {/* affiliate manager */}
                </Link>

                <Link
                  href="solutions/primary#reporting"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_2)}
                >
                  {t("menu.reporting", { ns: "home" })}
                  {/* Reports */}
                </Link>

                <Link
                  href="solutions/primary#marketing"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_3)}
                >
                  {t("menu.marketing", { ns: "home" })}
                  {/* marketing tools */}
                </Link>
                <Link
                  href="solutions/primary#deals"
                  className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_4)}
                  dangerouslySetInnerHTML={{ __html: t("menu.deals", { ns: "home" }) }}
                >
                  {/* deals manager */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
