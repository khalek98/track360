// @ts-nocheck
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";

import styles from "./Reporting.module.scss";

import { useAppContext } from "@/context/AppContext";

const Reporting = () => {
  const { t } = useTranslation(["solutions", "buttons"]);
  const { setShowRequestDemo } = useAppContext();

  return (
    <section id="reporting" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade triggerOnce direction="left" delay={500} className={styles.ImgWrapper}>
            <div className={styles.Screenshot}></div>
          </Fade>

          <h2 className={styles.Title}>{t("primary.reporting.title")}</h2>
          <Zoom triggerOnce>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.reporting.descr") }}
            ></p>
          </Zoom>

          <ul className={styles.List}>
            <Fade triggerOnce direction="down">
              <li className={styles.ListItem}>{t("primary.reporting.solutionList.0")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={300}>
              <li className={styles.ListItem}>{t("primary.reporting.solutionList.1")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={400}>
              <li className={styles.ListItem}>{t("primary.reporting.solutionList.2")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={500}>
              <li className={styles.ListItem}>{t("primary.reporting.solutionList.3")}</li>
            </Fade>
          </ul>

          <button onClick={() => setShowRequestDemo(true)} className={styles.Button}>
            {t("buttons:requestDemo")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
