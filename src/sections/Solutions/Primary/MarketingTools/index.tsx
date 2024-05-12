import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

import styles from "./MarketingTools.module.scss";

const MarketingTools = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="marketing" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade right delay={500} duration={1000}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Fade>

          <Fade>
            <h2 className={styles.Title}>{t("primary.marketing.title")}</h2>
          </Fade>
          <Fade left duration={1000}>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.marketing.descr") }}
            ></p>
          </Fade>

          <ul className={styles.List}>
            <Fade delay={100}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.0")}</li>
            </Fade>
            <Fade delay={200}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.1")}</li>
            </Fade>
            <Fade delay={300}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.2")}</li>
            </Fade>
            <Fade delay={400}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.3")}</li>
            </Fade>
            <Fade delay={500}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.4")}</li>
            </Fade>
            <Fade delay={600}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.5")}</li>
            </Fade>
            <Fade delay={700}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.6")}</li>
            </Fade>
            <Fade delay={800}>
              <li className={styles.ListItem}>{t("primary.marketing.solutionList.7")}</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketingTools;
