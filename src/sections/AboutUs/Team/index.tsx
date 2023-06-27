import React from "react";
import Image from "next/image";

import RonenImg from "./RonenBuchholz.png";
import AviImg from "./AviKenigsberg.png";
import LiorImg from "./LiorYashinski.png";

import styles from "./Team.module.scss";

const Team = () => {
  return (
    <section id="team" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}></div>
        <h2 className={styles.Title}>
          Meet Our <span>Team</span>
        </h2>

        <ul className={styles.TeamList}>
          <li className={styles.TeamItem}>
            <Image
              height={300}
              width={300}
              className={styles.TeamImg}
              src={RonenImg}
              alt="Team Track 360"
            />
            <h3 className={styles.TeamName}>Ronen Buchholz</h3>
            <div className={styles.TeamPosition}>Co-Founder</div>
            <a href="https://www.linkedin.com/" className={styles.TeamLink}>
              Linked In
            </a>
          </li>

          <li className={styles.TeamItem}>
            <Image
              height={300}
              width={300}
              className={styles.TeamImg}
              src={AviImg}
              alt="Team Track 360"
            />
            <h3 className={styles.TeamName}>Avi Kenigsberg</h3>
            <div className={styles.TeamPosition}>Co-Founder</div>
            <a href="https://www.linkedin.com/" className={styles.TeamLink}>
              Linked In
            </a>
          </li>

          <li className={styles.TeamItem}>
            <Image
              height={300}
              width={300}
              className={styles.TeamImg}
              src={LiorImg}
              alt="Team Track 360"
            />
            <h3 className={styles.TeamName}>Lior Yashinski</h3>
            <div className={styles.TeamPosition}>Co-Founder</div>
            <a href="https://www.linkedin.com/" className={styles.TeamLink}>
              Linked In
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
