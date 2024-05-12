import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import styles from "./Compliance.module.scss";

const Compliance = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="compliance" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade bottom delay={500}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Fade>

          <Fade right>
            <h2 className={styles.Title}>{t("primary.compliance.title")}</h2>
          </Fade>

          <Fade right>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.compliance.descr") }}
            ></p>
          </Fade>

          <ul className={styles.List}>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.0")}</li>
            </Fade>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.1")}</li>
            </Fade>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.2")}</li>
            </Fade>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.3")}</li>
            </Fade>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.4")}</li>
            </Fade>{" "}
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>{t("primary.compliance.solutionList.5")}</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
