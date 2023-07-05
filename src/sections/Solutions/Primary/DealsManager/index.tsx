import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

import styles from "./DealsManager.module.scss";

import DealsManagerImg from "./DealsManager.svg";

const DealsManager = () => {
  return (
    <section id="deals" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade left>
            <div className={styles.ImgWrapper}>
              <DealsManagerImg className={styles.Screenshot} />
            </div>
          </Fade>

          <h2 className={styles.Title}>Deals Manager</h2>
          <Fade bottom>
            <p className={styles.Text}>
              Track 360’s deal manager is unrivaled in terms of capabilities. It{" "}
              <span>supports any plan</span> the operator wishes to create, and can{" "}
              <span>calculate based</span> on any KPI provided.
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>Multi-level affiliates and sub-affiliate deals;</li>
            </Fade>
            <Fade bottom delay={200}>
              <li className={styles.ListItem}>
                Supports any type of commission plan – percentage based, flat-fee, tiered,
                recurring, CPA/ CPL, hybrid, or customized;
              </li>
            </Fade>
            <Fade bottom delay={300}>
              <li className={styles.ListItem}>
                Advanced decision tree to create desirable formulas, based on conditions such as
                activity, geo, and targets;
              </li>
            </Fade>
            <Fade bottom delay={400}>
              <li className={styles.ListItem}>
                Supports Multiple Campaigns with different Deals per Campaigns/ Affiliates;
              </li>
            </Fade>
            <Fade bottom delay={500}>
              <li className={styles.ListItem}>Deals can be calculated according to any KPI.</li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DealsManager;
