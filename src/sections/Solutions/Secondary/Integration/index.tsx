import React from "react";
import Image from "next/image";
import { Fade, Bounce } from "react-reveal";

import styles from "./Integration.module.scss";

import IntegrationImg from "./Integration.png";

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
            <Bounce delay={100}>
              <li className={styles.ListItem}>Reads data from various databases;</li>
            </Bounce>
            <Bounce delay={200}>
              <li className={styles.ListItem}>Postback events;</li>
            </Bounce>
            <Bounce delay={300}>
              <li className={styles.ListItem}>Push & Pulls;</li>
            </Bounce>
            <Bounce delay={400}>
              <li className={styles.ListItem}>Files & API;</li>
            </Bounce>
            <Bounce delay={500}>
              <li className={styles.ListItem}>File uploads;</li>
            </Bounce>
            <Bounce delay={600}>
              <li className={styles.ListItem}>Message queues.</li>
            </Bounce>
          </ul>

          <div className={styles.ImgWrapper}>
            <Fade right>
              <Image src={IntegrationImg} alt="Integration" className={styles.Screenshot} />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
