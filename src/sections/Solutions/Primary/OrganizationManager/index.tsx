import React from "react";
import { Fade, Zoom } from "react-reveal";

import styles from "./OrganizationManager.module.scss";

import OrganizationManagerImg from "./OrganizationManager.svg";

const OrganizationManager = () => {
  return (
    <section id="organization" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade right delay={500}>
            <div className={styles.ImgWrapper}>
              <OrganizationManagerImg className={styles.Screenshot} />
            </div>
          </Fade>

          <Fade>
            <h2 className={styles.Title}>Organization Manager</h2>
          </Fade>

          <Zoom>
            <p className={styles.Text}>
              Track 360 is designed to support the <span>complex organization structures</span> of
              large, multi-brand companies with global presence.
            </p>
          </Zoom>

          <ul className={styles.List}>
            <Zoom delay={100}>
              <li className={styles.ListItem}>Multiple brands with single client account;</li>
            </Zoom>
            <Zoom delay={200}>
              <li className={styles.ListItem}>
                Hierarchical Teams and departments – delegate tasks and ensure each team has
                resources needed;
              </li>
            </Zoom>
            <Zoom delay={300}>
              <li className={styles.ListItem}>
                Employee management – assign roles and permissions to each employee based on
                responsibilities and access level;
              </li>
            </Zoom>
            <Zoom delay={400}>
              <li className={styles.ListItem}>
                Geo Control – optimize your programs for different markets.
              </li>
            </Zoom>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrganizationManager;
