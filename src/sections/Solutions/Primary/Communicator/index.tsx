import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Trans, useTranslation } from "react-i18next";

import styles from "./Communicator.module.scss";

import { useAppContext } from "@/context/AppContext";

const Communicator = () => {
  const { setShowRequestDemo } = useAppContext();
  const { t } = useTranslation(["solutions", "buttons"]);

  return (
    <section id="communicator" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Zoom deley={500}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Zoom>

          <Fade right>
            <h2 className={styles.Title}>{t("primary.communicator.title")}</h2>
          </Fade>
          <Fade right delay={500}>
            <p className={styles.Text}>
              <Trans
                key={"primary.communicator.descr"}
                defaults={t("primary.communicator.descr")}
                components={{ span: <span /> }}
              />
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade right delay={100}>
              <li className={styles.ListItem}>{t("primary.communicator.solutionList.0")}</li>
            </Fade>
            <Fade right delay={200}>
              <li className={styles.ListItem}>{t("primary.communicator.solutionList.1")}</li>
            </Fade>
            <Fade right delay={300}>
              <li className={styles.ListItem}>{t("primary.communicator.solutionList.2")}</li>
            </Fade>
            <Fade right delay={400}>
              <li className={styles.ListItem}>{t("primary.communicator.solutionList.3")}</li>
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
