import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useTranslation } from "next-i18next";

import styles from "./PaymentModules.module.scss";

const PaymentModules = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="payment" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Zoom triggerOnce duration={1000} className={styles.ImgWrapper}>
            <div className={styles.Screenshot}></div>
          </Zoom>

          <h2 className={styles.Title}>{t("primary.payment.title")}</h2>
          <Fade triggerOnce direction="left">
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.payment.descr1") }}
            ></p>
          </Fade>
          <Fade triggerOnce direction="left" delay={300}>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.payment.descr2") }}
            ></p>
          </Fade>

          <ul className={styles.List}>
            <Fade triggerOnce direction="down" delay={100}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.0")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={200}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.1")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={300}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.2")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={400}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.3")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={500}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.4")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={600}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.5")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={700}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.6")}</li>
            </Fade>
            <Fade triggerOnce direction="down" delay={800}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.7")}</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaymentModules;
