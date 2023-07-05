import React from "react";
import Image from "next/image";
import { Fade, LightSpeed } from "react-reveal";

import styles from "./Compliance.module.scss";

import ComplianceImg from "./Compliance.svg";

const Compliance = () => {
  return (
    <section id="compliance" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade left delay={500}>
            <div className={styles.ImgWrapper}>
              <ComplianceImg className={styles.Screenshot} />
            </div>
          </Fade>

          <LightSpeed right>
            <h2 className={styles.Title}>Compliance</h2>
          </LightSpeed>

          <Fade right>
            <p className={styles.Text}>
              Track 360 lets you manage your compliance with <span>various regulations</span> and{" "}
              <span>guidelines related</span> to your affiliate marketing.
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>
                Standard templates for affiliate agreements that include necessary legal terms and
                conditions;
              </li>
            </Fade>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>
                Disclosure requirements set by the FTC and other regulatory bodies;
              </li>
            </Fade>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>
                KYC/ KYP affiliate onboarding - based on brand regulation/requirements, we GEO and
                traffic GEO;
              </li>
            </Fade>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>
                Monitoring tools to track affiliate activity and ensure that your affiliates are
                complying with their terms;
              </li>
            </Fade>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>
                Compliance reports that highlight any potential compliance issue;
              </li>
            </Fade>{" "}
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>
                Geo-targeting for local regulations of specific regions or countries, such as GDPR
                in EU.
              </li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
