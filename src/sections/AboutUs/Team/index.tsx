// @ts-nocheck
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import RonenImg from "./RonenBuchholz.png";
import AviImg from "./AviKenigsberg.png";
import LiorImg from "./LiorYashinski.png";

import styles from "./Team.module.scss";

const Team = () => {
  const { t } = useTranslation("about");

  return (
    <section id="team" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>
            {t("Meet Our")} <span>{t("Team")}</span>
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
              <div className={styles.TeamPosition}>{t("Co-Founder")}</div>
              <p className={styles.TeamDescription}>{t("RonenDescr")}</p>
              <a
                href="https://www.linkedin.com/in/ronen-buchholz-593817b1"
                className={styles.TeamLink}
                target="_blank"
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
              <div className={styles.TeamPosition}>{t("Co-Founder")}</div>
              <p className={styles.TeamDescription}>{t("AviDescr")}</p>
              <a
                href="https://www.linkedin.com/in/avikenigsberg"
                className={styles.TeamLink}
                target="_blank"
              >
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
              <div className={styles.TeamPosition}>{t("Co-Founder")}</div>
              <p className={styles.TeamDescription}>{t("LiorDescr")}</p>
              <a
                href="http://linkedin.com/in/lior-yashinski-2678743"
                className={styles.TeamLink}
                target="_blank"
              >
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
