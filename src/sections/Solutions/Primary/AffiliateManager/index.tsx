import React from "react";
import cn from "classnames";
import { Fade } from "react-reveal";

import styles from "./AffiliateManager.module.scss";

import Img1 from "./Affiliate_1.svg";
import Img2 from "./Affiliate_2.svg";

const AffiliateManager = () => {
  return (
    <section id="affiliate" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>Affiliate Manager</h2>
          <Fade bottom>
            <p className={styles.Text}>
              This is your main dashboard, where you can view and perform the most common activities
              of your affiliate management.
              <br />
              <span>Here you have easy access to the performance metrics of your affiliates.</span>
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade right duration={500}>
              <li className={styles.ListItem}>Data on clicks, revenue and other metrics;</li>
            </Fade>
            <Fade right duration={500} delay={300}>
              <li className={styles.ListItem}>View and apply commission structures;</li>
            </Fade>
            <Fade right duration={500} delay={400}>
              <li className={styles.ListItem}>Flexible onboarding and KYC process;</li>
            </Fade>
            <Fade right duration={500} delay={600}>
              <li className={styles.ListItem}>Payment info & Affiliate Statement;</li>
            </Fade>
            <Fade right duration={500} delay={700}>
              <li className={styles.ListItem}> Add notes & Notes History;</li>
            </Fade>
            <Fade right duration={500} delay={800}>
              <li className={styles.ListItem}>Customizable accounts registration API.</li>
            </Fade>
          </ul>

          <div className={styles.ImgWrapper}>
            <Fade right duration={500}>
              <Img1 className={cn(styles.Screenshot, styles.Screenshot1)} />
            </Fade>

            <Fade right duration={500} delay={500}>
              <Img2 className={cn(styles.Screenshot, styles.Screenshot2)} />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateManager;
