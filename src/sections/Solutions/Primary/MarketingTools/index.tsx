import React from "react";
import { useTranslation } from "next-i18next";
import { Fade } from "react-awesome-reveal";

import styles from "./MarketingTools.module.scss";

const MarketingTools = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="marketing" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade
            triggerOnce
            direction="right"
            delay={500}
            duration={1000}
            className={styles.ImgWrapper}
          >
            <div className={styles.Screenshot}></div>
          </Fade>

          <Fade triggerOnce>
            <h2 className={styles.Title}>{t("primary.marketing.title")}</h2>
          </Fade>
          <Fade triggerOnce direction="left" duration={1000}>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.marketing.descr") }}
            ></p>
          </Fade>

          <ul className={styles.List}>
            <Fade triggerOnce delay={100}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.0")}</li>
            </Fade>
            <Fade triggerOnce delay={200}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.1")}</li>
            </Fade>
            <Fade triggerOnce delay={300}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.2")}</li>
            </Fade>
            <Fade triggerOnce delay={400}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.3")}</li>
            </Fade>
            <Fade triggerOnce delay={500}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.4")}</li>
            </Fade>
            <Fade triggerOnce delay={600}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.5")}</li>
            </Fade>
            <Fade triggerOnce delay={700}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.6")}</li>
            </Fade>
            <Fade triggerOnce delay={800}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.7")}</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketingTools;
