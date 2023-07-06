import React from "react";
import { Fade, Zoom } from "react-reveal";

import styles from "./Reporting.module.scss";

import { useAppContext } from "@/context/AppContext";

const Reporting = () => {
  const { setShowRequestDemo } = useAppContext();

  return (
    <section id="reporting" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Fade left delay={500}>
            <div className={styles.ImgWrapper}>
              <div className={styles.Screenshot}></div>
            </div>
          </Fade>

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
            <Fade bottom>
              <li className={styles.ListItem}>
                Fast Aggregation – view reports by dates, Affiliates, Geos, Employees, etc.;
              </li>
            </Fade>
            <Fade bottom delay={300}>
              <li className={styles.ListItem}>Export to Pdf, Excel, Email, and API;</li>
            </Fade>
            <Fade bottom delay={400}>
              <li className={styles.ListItem}>Customizable - any KPI can be included;</li>
            </Fade>
            <Fade bottom delay={500}>
              <li className={styles.ListItem}>
                ROI Analysis - calculate the return on investment on each affiliate and their
                individual payout program so that you can optimize your marketing spend.
              </li>
            </Fade>
          </ul>

          <button onClick={() => setShowRequestDemo(true)} className={styles.Button}>
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
