import React from "react";

import { Fade, Zoom } from "react-reveal";

import styles from "./Choose.module.scss";
import { reasonsArr } from "./reasonsArr";

const Choose = () => {
  return (
    <section className={styles.Choose}>
      <div className="container">
        <div className={styles.ChooseWrapper}>
          <h2 className={styles.Title}>
            <span>Why</span> Choose Us?
          </h2>
          <Fade bottom>
            <p className={styles.Text}>
              Proline’s signature software, Track 360, is truly unrivaled in terms of performance
              and capabilities.
            </p>
          </Fade>

          <Fade bottom delay={200}>
            <p className={styles.Text}>
              Our team has taken every standard feature one step further, and thought of those that
              were missing.
            </p>
          </Fade>

          <ul className={styles.ChooseList}>
            {reasonsArr.map(({ title, descr, imgSVG: ImgSVG }) => (
              <li className={styles.ChooseItem} key={title}>
                <Zoom delay={100}>
                  <div className={styles.ImgWrapper}>
                    <ImgSVG />
                  </div>
                </Zoom>
                <Fade right delay={100}>
                  <div className={styles.ChooseItemText}>
                    <h3 className={styles.ChooseTitle}>{title}</h3>
                    <p className={styles.ChooseDescr}>{descr}</p>
                  </div>
                </Fade>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Choose;
