import React from "react";
import { Fade, Zoom } from "react-reveal";
import { useTranslation } from "react-i18next";

import styles from "./PaymentModules.module.scss";

const PaymentModules = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="payment" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Zoom duration={1000}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Zoom>

          <h2 className={styles.Title}>{t("primary.payment.title")}</h2>
          <Fade left>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.payment.descr1") }}
            ></p>
          </Fade>
          <Fade left delay={300}>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("primary.payment.descr2") }}
            ></p>
          </Fade>

          <ul className={styles.List}>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.0")}</li>
            </Fade>
            <Fade bottom delay={200}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.1")}</li>
            </Fade>
            <Fade bottom delay={300}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.2")}</li>
            </Fade>
            <Fade bottom delay={400}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.3")}</li>
            </Fade>
            <Fade bottom delay={500}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.4")}</li>
            </Fade>
            <Fade bottom delay={600}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.5")}</li>
            </Fade>
            <Fade bottom delay={700}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.6")}</li>
            </Fade>
            <Fade bottom delay={800}>
              <li className={styles.ListItem}>{t("primary.payment.solutionList.7")}</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaymentModules;
