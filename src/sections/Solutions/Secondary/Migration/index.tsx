import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Trans, useTranslation } from "next-i18next";

import styles from "./Migration.module.scss";

const Migration = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="migration" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <div className={styles.ImgWrapper}>
            <div className={styles.Img}></div>
          </div>

          <h2 className={styles.Title}>{t("secondary.migration.title")}</h2>
          <Fade triggerOnce direction="right">
            <p className={styles.Text}>
              <Trans
                key={"secondary.migration.descr1"}
                defaults={t("secondary.migration.descr1")}
                components={{ span: <span /> }}
              />
            </p>
          </Fade>
          <Fade triggerOnce direction="right" delay={300}>
            <p className={styles.Text}>
              <Trans
                key={"secondary.migration.descr2"}
                defaults={t("secondary.migration.descr2")}
                components={{ span: <span /> }}
              />
            </p>
          </Fade>

          <ul className={styles.List}>
            <Zoom delay={100}>
              <li className={styles.ListItem}>{t("secondary.migration.solutionList.0")}</li>
            </Zoom>
            <Zoom delay={200}>
              <li className={styles.ListItem}>{t("secondary.migration.solutionList.1")}</li>
            </Zoom>
            <Zoom delay={300}>
              <li className={styles.ListItem}>{t("secondary.migration.solutionList.2")}</li>
            </Zoom>
            <Zoom delay={400}>
              <li className={styles.ListItem}>{t("secondary.migration.solutionList.3")}</li>
            </Zoom>
            <Zoom delay={500}>
              <li className={styles.ListItem}>{t("secondary.migration.solutionList.4")}</li>
            </Zoom>
            <Zoom delay={600}>
              <li className={styles.ListItem}>{t("secondary.migration.solutionList.5")} </li>
            </Zoom>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Migration;
