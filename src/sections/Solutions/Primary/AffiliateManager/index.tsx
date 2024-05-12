// @ts-nocheck
import React from "react";
import cn from "classnames";
import { Fade } from "react-awesome-reveal";

import styles from "./AffiliateManager.module.scss";
import { useTranslation } from "next-i18next";

const AffiliateManager = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="affiliate" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>{t("primary.affiliate.title")}</h2>
          <Fade triggerOnce direction="down">
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.affiliate.descr") }}
            ></p>
          </Fade>

          <ul className={styles.List}>
            <Fade triggerOnce direction="right" duration={500}>
              <li className={styles.ListItem}>{t("primary.affiliate.solutionList.0")}</li>
            </Fade>
            <Fade triggerOnce direction="right" duration={500} delay={300}>
              <li className={styles.ListItem}>{t("primary.affiliate.solutionList.1")}</li>
            </Fade>
            <Fade triggerOnce direction="right" duration={500} delay={400}>
              <li className={styles.ListItem}>{t("primary.affiliate.solutionList.2")}</li>
            </Fade>
            <Fade triggerOnce direction="right" duration={500} delay={600}>
              <li className={styles.ListItem}>{t("primary.affiliate.solutionList.3")}</li>
            </Fade>
            <Fade triggerOnce direction="right" duration={500} delay={700}>
              <li className={styles.ListItem}>{t("primary.affiliate.solutionList.4")}</li>
            </Fade>
            <Fade triggerOnce direction="right" duration={500} delay={800}>
              <li className={styles.ListItem}>{t("primary.affiliate.solutionList.5")}</li>
            </Fade>
          </ul>

          <div className={styles.ImgWrapper}>
            <Fade triggerOnce direction="right" duration={500}>
              <div className={cn(styles.Screenshot, styles.Screenshot1)}></div>
            </Fade>

            <Fade triggerOnce direction="right" duration={500}>
              <div className={cn(styles.Screenshot, styles.Screenshot2)}></div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateManager;
