// @ts-nocheck
import React from "react";

import styles from "./Choose.module.scss";
import { reasonsArr } from "./reasonsArr";
import { useTranslation } from "next-i18next";
import { Fade, Zoom } from "react-awesome-reveal";

const Choose = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.Choose}>
      <div className="container">
        <div className={styles.ChooseWrapper}>
          <h2 className={styles.Title} dangerouslySetInnerHTML={{ __html: t("choose.title") }}></h2>
          <Fade triggerOnce direction="up">
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("choose.paragraph1") }}
            ></p>
          </Fade>

          <Fade triggerOnce direction="up" delay={200}>
            <p
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: t("choose.paragraph2") }}
            ></p>
          </Fade>

          <ul className={styles.ChooseList}>
            {reasonsArr.map(({ title, descr, imgSVG: ImgSVG }, i) => (
              <li className={styles.ChooseItem} key={title}>
                <Zoom triggerOnce delay={100}>
                  <div className={styles.ImgWrapper}>
                    <ImgSVG />
                  </div>
                </Zoom>
                <Fade triggerOnce direction="right" delay={100 + i * 10}>
                  <div className={styles.ChooseItemText}>
                    <h3
                      className={styles.ChooseTitle}
                      dangerouslySetInnerHTML={{ __html: t(`choose.reasons.${i}.title`) }}
                    ></h3>
                    <p
                      className={styles.ChooseDescr}
                      dangerouslySetInnerHTML={{ __html: t(`choose.reasons.${i}.descr`) }}
                    ></p>
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
