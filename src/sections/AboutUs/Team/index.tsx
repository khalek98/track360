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
        <div className={styles.SectionWrapper}>
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
              <p className={styles.TeamDescription}>
                Ronen holds a BA in economics and computer science, from Bar Ilan University in
                Israel. With over 20 years of experience in online marketing and marketing software
                development, Ronen founded several marketing networks such as Prime Gaming, Refer
                Partners, Media Agency and a regulated gaming brand.
              </p>
              <a
                href="https://www.linkedin.com/in/ronen-buchholz-593817b1"
                className={styles.TeamLink}
              >
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
              <p className={styles.TeamDescription}>
                Avi holds a BS and MS degree (Cum Laude) in computer science, from the prestigious
                Technion, in Israel. With over 20 years of experience in software engineering, Avi
                has led many complex projects specifically in the fields of online gaming and
                marketing.
              </p>
              <a href="https://www.linkedin.com/in/avikenigsberg" className={styles.TeamLink}>
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
              <p className={styles.TeamDescription}>
                Lior holds over 22 years of experience in web development, online marketing and
                affiliation specifically in online finance and gaming. He is the founder of Refer
                Partners, and has many active developments in the industry.
              </p>
              <a href="http://linkedin.com/in/lior-yashinski-2678743" className={styles.TeamLink}>
                Linked In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
