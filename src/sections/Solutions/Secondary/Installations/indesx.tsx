import React from "react";

import styles from "./Installations.module.scss";

const Installations = () => {
  return (
    <section className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>Installations</h2>
          <p className={styles.Text}>
            Track 360 clients can choose between 2 installations, <span>On-premise</span>, or{" "}
            <span>SaaS</span> where we at Proline hold and manage in our secured servers. This
            depends on your customization preferences, and your organization’s IT infrastructure
            capabilities.
          </p>

          <ul className={styles.BlocksWrapper}>
            <li className={styles.Block}>
              <div className={styles.BlockImg}></div>
              <h3 className={styles.BlockTitle}>On-Premise</h3>
              <ul className={styles.BlockList}>
                <li className={styles.BlockItem}>
                  Runs on organization’s own servers, accessed through internal network;
                </li>
                <li className={styles.BlockItem}>Greater customization options;</li>
                <li className={styles.BlockItem}>
                  Direct control over data security, backups, and compliance measures;
                </li>
                <li className={styles.BlockItem}>
                  More control over configurations, integrations, and data handling practices.
                </li>
              </ul>
            </li>

            <li className={styles.Block}>
              <div className={styles.BlockImg}></div>
              <h3 className={styles.BlockTitle}>SaaS</h3>
              <ul className={styles.BlockList}>
                <li className={styles.BlockItem}>
                  Fully Managed, Hassle-free from Hardware Maintenance;
                </li>
                <li className={styles.BlockItem}>Software Updates, or Security Patches;</li>
                <li className={styles.BlockItem}>Optimal Performance and Up-time;</li>
                <li className={styles.BlockItem}>Highly Scalable;</li>
                <li className={styles.BlockItem}>Rapid Deployment.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Installations;
