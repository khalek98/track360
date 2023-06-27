import React from "react";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";

import styles from "./Migration.module.scss";

import MigrationImg from "./MigrationAnimation.gif";

const Migration = () => {
  return (
    <section id="migration" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <div className={styles.ImgWrapper}>
            <Image className={styles.Img} src={MigrationImg} alt="Migration" />
          </div>

          <h2 className={styles.Title}>Migration</h2>
          <Fade right>
            <p className={styles.Text}>
              Clients interested in migrating to Track 360 can rest assured that the transition will
              be <span>smooth, quick, and hassle-free.</span>
            </p>
          </Fade>
          <Fade right delay={300}>
            <p className={styles.Text}>
              All you have to do is transit the following data, and our{" "}
              <span>automation and experts handle the rest!</span>
            </p>
          </Fade>

          <ul className={styles.List}>
            <Zoom delay={100}>
              <li className={styles.ListItem}>Client History;</li>
            </Zoom>
            <Zoom delay={200}>
              <li className={styles.ListItem}>Commissions;</li>
            </Zoom>
            <Zoom delay={300}>
              <li className={styles.ListItem}>affiliates payment details;</li>
            </Zoom>
            <Zoom delay={400}>
              <li className={styles.ListItem}>Payments;</li>
            </Zoom>
            <Zoom delay={500}>
              <li className={styles.ListItem}>Reports;</li>
            </Zoom>
            <Zoom delay={600}>
              <li className={styles.ListItem}>Deal structure of each affiliate. </li>
            </Zoom>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Migration;
