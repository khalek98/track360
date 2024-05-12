import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";

import styles from "./Compliance.module.scss";

const Compliance = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="compliance" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade triggerOnce direction="down" delay={500} className={styles.ImgWrapper}>
            <div className={styles.Screenshot}></div>
          </Fade>

          <Fade triggerOnce direction="right">
            <h2 className={styles.Title}>{t("primary.compliance.title")}</h2>
          </Fade>

          <Fade triggerOnce direction="right">
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.compliance.descr") }}
            ></p>
          </Fade>

          <ul className={styles.List}>
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.0")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.1")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.2")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.3")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.4")}</li>
            </Fade>{" "}
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.5")}</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
