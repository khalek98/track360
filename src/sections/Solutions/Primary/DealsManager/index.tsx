import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";

import styles from "./DealsManager.module.scss";

const DealsManager = () => {
  const { t } = useTranslation("solutions");
  return (
    <section id="deals" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade triggerOnce direction="left" className={styles.ImgWrapper}>
            <div className={styles.Screenshot}></div>
          </Fade>

          <h2 className={styles.Title}>{t("primary.deals.title")}</h2>
          <Fade triggerOnce direction="down">
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.deals.descr") }}
            ></p>
          </Fade>

          <ul className={styles.List}>
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("primary.deals.solutionList.0")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={200}>
              <li className={styles.ListItem}>{t("primary.deals.solutionList.1")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={300}>
              <li className={styles.ListItem}>{t("primary.deals.solutionList.2")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={400}>
              <li className={styles.ListItem}>{t("primary.deals.solutionList.3")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={500}>
              <li className={styles.ListItem}>{t("primary.deals.solutionList.4")}</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DealsManager;
