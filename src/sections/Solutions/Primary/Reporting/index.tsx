import React from "react";
import Image from "next/image";
import { Fade, Zoom, LightSpeed } from "react-reveal";

import styles from "./Reporting.module.scss";

import ReportingImg from "./Reporting.png";

const Reporting = () => {
  return (
    <section id="reporting" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <div className={styles.ImgWrapper}>
            <LightSpeed left delay={500}>
              <Image src={ReportingImg} alt="Reporting" className={styles.Screenshot} />
            </LightSpeed>
          </div>

          <h2 className={styles.Title}>Reporting</h2>
          <Zoom>
            <p className={styles.Text}>
              Track 360’s <span>customizable reporting feature</span> is unrivaled in terms of depth
              and capabilities, with detailed insights into the performance of affiliates, so that
              you can determine their real value to your business and make{" "}
              <span>informed decisions</span> regarding your budget.
            </p>
          </Zoom>

          <ul className={styles.List}>
            <Fade right>
              <li className={styles.ListItem}>
                Fast Aggregation – view reports by dates, Affiliates, Geos, Employees, etc.;
              </li>
            </Fade>
            <Fade right delay={300}>
              <li className={styles.ListItem}>Export to Pdf, Excel, Email, and API;</li>
            </Fade>
            <Fade right delay={400}>
              <li className={styles.ListItem}>Customizable - any KPI can be included;</li>
            </Fade>
            <Fade right delay={500}>
              <li className={styles.ListItem}>ROI Analysis</li>
            </Fade>
          </ul>

          <button className={styles.Button}>Request Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
