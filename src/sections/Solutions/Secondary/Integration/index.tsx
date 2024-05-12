import React from "react";
import { Fade } from "react-awesome-reveal";
import { Trans, useTranslation } from "next-i18next";

import styles from "./Integration.module.scss";

const Integration = () => {
  const { t } = useTranslation("solutions");
  return (
    <section id="integration" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>{t("secondary.integrations.title")}</h2>
          <Fade triggerOnce direction="down" delay={300}>
            <p className={styles.Text}>
              <Trans
                key={"secondary.integrations.descr1"}
                defaults={t("secondary.integrations.descr1")}
                components={{ span: <span /> }}
              />
            </p>
          </Fade>
          <Fade triggerOnce direction="down" delay={300}>
            <p className={styles.Text}>
              <Trans
                key={"secondary.integrations.descr2"}
                defaults={t("secondary.integrations.descr2")}
                components={{ span: <span /> }}
              />
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("secondary.integrations.solutionList.0")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={200}>
              <li className={styles.ListItem}>{t("secondary.integrations.solutionList.1")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={300}>
              <li className={styles.ListItem}>{t("secondary.integrations.solutionList.2")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={400}>
              <li className={styles.ListItem}>{t("secondary.integrations.solutionList.3")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={500}>
              <li className={styles.ListItem}>{t("secondary.integrations.solutionList.4")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={600}>
              <li className={styles.ListItem}>{t("secondary.integrations.solutionList.5")}</li>
            </Fade>
          </ul>
          <div className={styles.ImgWrapper}>
            <Fade triggerOnce direction="right">
              <div className={styles.Screenshot}></div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
