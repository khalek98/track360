import React from "react";

import { Fade } from "react-reveal";

import styles from "./MarketingTools.module.scss";

const MarketingTools = () => {
  return (
    <section id="marketing" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade right delay={500} duration={1000}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Fade>

          <Fade>
            <h2 className={styles.Title}>Marketing Tools</h2>
          </Fade>
          <Fade left duration={1000}>
            <p className={styles.Text}>
              Track 360 includes a range of <span>marketing tools</span> to equip your affiliates
              with, so that they can effectively <span>promote your business.</span>
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade delay={100}>
              <li className={styles.ListItem}>
                Banners, videos, widgets, landing pages, deep links;
              </li>
            </Fade>
            <Fade delay={200}>
              <li className={styles.ListItem}>Ad serving (according to geo-based regulation);</li>
            </Fade>
            <Fade delay={300}>
              <li className={styles.ListItem}>Mobile tracking integrations;</li>
            </Fade>
            <Fade delay={400}>
              <li className={styles.ListItem}>Lead Registration API;</li>
            </Fade>
            <Fade delay={500}>
              <li className={styles.ListItem}>
                Show/ Hide Creatives to Selected Groups of Affiliates;
              </li>
            </Fade>
            <Fade delay={600}>
              <li className={styles.ListItem}>
                Auto enable/ disable creatives according to expiry dates such as for holiday
                promotions;
              </li>
            </Fade>
            <Fade delay={700}>
              <li className={styles.ListItem}>Email templates for Affiliate Manager;</li>
            </Fade>
            <Fade delay={800}>
              <li className={styles.ListItem}>
                Water marks for risk warnings/ compliance purposes.
              </li>
            </Fade>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketingTools;
