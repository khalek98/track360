import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";

import styles from "./OrganizationManager.module.scss";

const OrganizationManager = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="organization" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade triggerOnce direction="right" delay={500} className={styles.ImgWrapper}>
            <div className={styles.Screenshot}></div>
          </Fade>

          <Fade triggerOnce>
            <h2 className={styles.Title}>{t("primary.organization.title")}</h2>
          </Fade>

          <Zoom triggerOnce>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.organization.descr") }}
            ></p>
          </Zoom>

          <ul className={styles.List}>
            <Zoom triggerOnce delay={100}>
              <li className={styles.ListItem}>{t("primary.organization.solutionList.0")}</li>
            </Zoom>
            <Zoom triggerOnce delay={200}>
              <li className={styles.ListItem}>{t("primary.organization.solutionList.1")}</li>
            </Zoom>
            <Zoom triggerOnce delay={300}>
              <li className={styles.ListItem}>{t("primary.organization.solutionList.2")}</li>
            </Zoom>
            <Zoom triggerOnce delay={400}>
              <li className={styles.ListItem}>{t("primary.organization.solutionList.3")}</li>
            </Zoom>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrganizationManager;
