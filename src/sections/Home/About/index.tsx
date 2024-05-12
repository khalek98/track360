import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

import styles from "./About.module.scss";

const About = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.About} id="about">
      <div className="container">
        <div className={styles.AboutWrapper}>
          <h2 className={styles.Title} dangerouslySetInnerHTML={{ __html: t("about.title") }}></h2>
          <h3
            className={styles.Subtitle}
            dangerouslySetInnerHTML={{ __html: t("about.subtitle") }}
          ></h3>

          <Fade bottom>
            <p
              className={cn(styles.Text)}
              dangerouslySetInnerHTML={{ __html: t("about.paragraph1") }}
            ></p>
          </Fade>

          <Fade bottom>
            <p
              className={cn(styles.Text)}
              dangerouslySetInnerHTML={{ __html: t("about.paragraph2") }}
            ></p>
          </Fade>

          <Fade right duration={1000}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
