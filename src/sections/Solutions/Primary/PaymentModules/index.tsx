import React from "react";
import Image from "next/image";
import { Fade, Zoom, Bounce } from "react-reveal";

import styles from "./PaymentModules.module.scss";

import PaymentModulesImg from "./PaymentModule.png";
const PaymentModules = () => {
  return (
    <section id="payment" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <div className={styles.ImgWrapper}>
            <Zoom duration={1000}>
              <Image src={PaymentModulesImg} alt="Payment Modules" className={styles.Screenshot} />
            </Zoom>
          </div>

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
            <Bounce bottom delay={100}>
              <li className={styles.ListItem}>Multi-currency based on affiliate request;</li>
            </Bounce>
            <Bounce bottom delay={200}>
              <li className={styles.ListItem}>Financial statements summarizing all data;</li>
            </Bounce>
            <Bounce bottom delay={300}>
              <li className={styles.ListItem}>
                Weekly/ Monthly modules – stay organized and efficient;
              </li>
            </Bounce>
            <Bounce bottom delay={400}>
              <li className={styles.ListItem}>
                Ad hoc module – flexible and versatile, for singular or irregular payments;
              </li>
            </Bounce>
            <Bounce bottom delay={500}>
              <li className={styles.ListItem}>
                Commission approval process according to set policy;
              </li>
            </Bounce>
            <Bounce bottom delay={600}>
              <li className={styles.ListItem}>Payment execution process;</li>
            </Bounce>
            <Bounce bottom delay={700}>
              <li className={styles.ListItem}>Integration to PSPs;</li>
            </Bounce>
            <Bounce bottom delay={800}>
              <li className={styles.ListItem}>Risk Management Reports and Approval.</li>
            </Bounce>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaymentModules;
