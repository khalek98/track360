import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Trans, useTranslation } from "next-i18next";

import styles from "./Communicator.module.scss";

import { useAppContext } from "@/context/AppContext";

const Communicator = () => {
  const { setShowRequestDemo } = useAppContext();
  const { t } = useTranslation();

  return (
    <section id="communicator" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Zoom triggerOnce delay={500} className={styles.ImgWrapper}>
            <div className={styles.Screenshot}></div>
          </Zoom>

          <Fade triggerOnce direction="right">
            <h2 className={styles.Title}>{t("primary.communicator.title", { ns: "solutions" })}</h2>
          </Fade>
          <Fade triggerOnce direction="right" delay={500}>
            <p className={styles.Text}>
              <Trans
                key={"solutions:primary.communicator.descr"}
                defaults={t("primary.communicator.descr", { ns: "solutions" })}
                components={{ span: <span /> }}
              />
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade triggerOnce direction="right" delay={100}>
              <li className={styles.ListItem}>
                {t("primary.communicator.solutionList.0", { ns: "solutions" })}
              </li>
            </Fade>
            <Fade triggerOnce direction="right" delay={200}>
              <li className={styles.ListItem}>
                {t("primary.communicator.solutionList.1", { ns: "solutions" })}
              </li>
            </Fade>
            <Fade triggerOnce direction="right" delay={300}>
              <li className={styles.ListItem}>
                {t("primary.communicator.solutionList.2", { ns: "solutions" })}
              </li>
            </Fade>
            <Fade triggerOnce direction="right" delay={400}>
              <li className={styles.ListItem}>
                {t("primary.communicator.solutionList.3", { ns: "solutions" })}
              </li>
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

export default Communicator;
