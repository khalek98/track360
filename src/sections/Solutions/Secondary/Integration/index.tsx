import React from "react";
import { Fade, Bounce } from "react-reveal";

import styles from "./Integration.module.scss";

const Integration = () => {
  return (
    <section id="integration" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>Integration</h2>
          <Fade bottom delay={300}>
            <p className={styles.Text}>
              Track 360 is flexible and customizable, and can cater to both{" "}
              <span>quick and simple integrations</span>, as well as complex data integrations. For
              structured data clients, Track 360 can synthesize to client’s terminology and KPIs
              free of code writing or programming.
            </p>
          </Fade>
          <Fade bottom delay={300}>
            <p className={styles.Text}>
              For more complex integration, the Track 360 integration team can{" "}
              <span>tweak raw data and match the platform</span> for quick and efficient
              integration.
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade bottom delay={100}>
              <li className={styles.ListItem}>Reads data from various databases;</li>
            </Fade>
            <Fade bottom delay={200}>
              <li className={styles.ListItem}>Postback events;</li>
            </Fade>
            <Fade bottom delay={300}>
              <li className={styles.ListItem}>Push & Pulls;</li>
            </Fade>
            <Fade bottom delay={400}>
              <li className={styles.ListItem}>Files & API;</li>
            </Fade>
            <Fade bottom delay={500}>
              <li className={styles.ListItem}>File uploads;</li>
            </Fade>
            <Fade bottom delay={600}>
              <li className={styles.ListItem}>Message queues.</li>
            </Fade>
          </ul>
          <div className={styles.ImgWrapper}>
            <Fade right>
              <div className={styles.Screenshot}></div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
