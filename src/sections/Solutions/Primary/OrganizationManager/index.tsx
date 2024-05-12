import React from "react";
import { Fade, Zoom } from "react-reveal";
import { useTranslation } from "react-i18next";

import styles from "./OrganizationManager.module.scss";

const OrganizationManager = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="organization" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade right delay={500}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Fade>

          <Fade>
            <h2 className={styles.Title}>{t("primary.organization.title")}</h2>
          </Fade>

          <Zoom>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.organization.descr") }}
            ></p>
          </Zoom>

          <ul className={styles.List}>
            <Zoom delay={100}>
              <li className={styles.ListItem}>{t("primary.organization.solutionList.0")}</li>
            </Zoom>
            <Zoom delay={200}>
              <li className={styles.ListItem}>{t("primary.organization.solutionList.1")}</li>
            </Zoom>
            <Zoom delay={300}>
              <li className={styles.ListItem}>{t("primary.organization.solutionList.2")}</li>
            </Zoom>
            <Zoom delay={400}>
              <li className={styles.ListItem}>{t("primary.organization.solutionList.3")}</li>
            </Zoom>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrganizationManager;
