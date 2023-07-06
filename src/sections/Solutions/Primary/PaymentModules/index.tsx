import React from "react";
import { Fade, Zoom } from "react-reveal";

import styles from "./PaymentModules.module.scss";

const PaymentModules = () => {
  return (
    <section id="payment" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Zoom duration={1000}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Zoom>

          <h2 className={styles.Title}>Payment Module</h2>
          <Fade left>
            <p className={styles.Text}>
              Track 360’s payment module allow operators to <span>manage mass payments</span> to
              their affiliates efficiently, accurately, and securely, while providing{" "}
              <span>flexibility and compliance with tax laws and regulation.</span>
            </p>
          </Fade>
          <Fade left delay={300}>
            <p className={styles.Text}>
              Streamline your payment processes and easily{" "}
              <span>manage commissions, bonuses, credits, and debits.</span>
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>Multi-currency based on affiliate request;</li>
            </Fade>
            <Fade bottom delay={200}>
              <li className={styles.ListItem}>Financial statements summarizing all data;</li>
            </Fade>
            <Fade bottom delay={300}>
              <li className={styles.ListItem}>
                Weekly/ Monthly modules – stay organized and efficient;
              </li>
            </Fade>
            <Fade bottom delay={400}>
              <li className={styles.ListItem}>
                Ad hoc module – flexible and versatile, for singular or irregular payments;
              </li>
            </Fade>
            <Fade bottom delay={500}>
              <li className={styles.ListItem}>
                Commission approval process according to set policy;
              </li>
            </Fade>
            <Fade bottom delay={600}>
              <li className={styles.ListItem}>Payment execution process;</li>
            </Fade>
            <Fade bottom delay={700}>
              <li className={styles.ListItem}>Integration to PSPs;</li>
            </Fade>
            <Fade bottom delay={800}>
              <li className={styles.ListItem}>Risk Management Reports and Approval.</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaymentModules;
