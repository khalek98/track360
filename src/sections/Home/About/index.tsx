import React from "react";
import cn from "classnames";
import { Fade } from "react-reveal";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.About} id="about">
      <div className="container">
        <div className={styles.AboutWrapper}>
          <h2 className={styles.Title}>About Us</h2>
          <h3 className={styles.Subtitle}>
            Unlock Your <span> Affiliate Potential</span>
          </h3>

          <Fade bottom>
            <p className={cn(styles.Text)}>
              Track 360 is powered by Proline Ltd, based in Tel Aviv, Israel. Established in 2017,
              Proline&apos;s Team has over 20 years of R&D and online marketing experience.
              Comprised of experienced marketers and software developers, Proline is dedicated to
              providing the best and <span>most feature-rich affiliate software</span> on the market
            </p>
          </Fade>

          <Fade bottom delay={500}>
            <p className={cn(styles.Text)}>
              Our mission is to <span>empower</span> clients like you to harness the true power of
              affiliate marketing, driving business growth and reaching new customers. With our
              reliable, high-quality, user-friendly software, we provide unparalleled insights into
              your affiliate program&apos;s performance, giving you the edge you need to succeed.
            </p>
          </Fade>

          <Fade right duration={1000}>
            <div className={styles.ImgWrapper}>
              {/* <AboutImg /> */}
              <div className={styles.Screenshot}></div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
