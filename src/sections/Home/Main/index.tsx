import React from "react";
import cn from "classnames";

import styles from "./Main.module.scss";
import MainSectionLayout from "@/layouts/MainSectionLayout/MainSectionLayout";

const Main = () => {
  return (
    <section className={styles.Main}>
      <MainSectionLayout arrowLink="about" />
      <div className="container">
        <div className={styles.MainWrapper}>
          <h1 className={styles.Title}>
            Maximize <span>Your Affiliate</span> Success
          </h1>
          <p className={styles.Text}>
            Track 360 is the most feature-rich, enabling <span>affiliate management software</span>{" "}
            available today. With an unrivaled level of functionality, you can perform{" "}
            <span>more actions</span> than ever before.
          </p>

          <div className={styles.MiddleMenuWrapp}>
            <div className={styles.Inner}>
              <div className={styles.FiledCircle}></div>
              <div className={styles.FiledCircle}></div>
            </div>
            <div className={styles.DashedBg}>
              <div className={styles.FildeBg}>
                <div className={styles.Arrow}></div>
                <div className={styles.Arrow}></div>
                <div className={styles.Arrow}></div>
                <div className={styles.Arrow}></div>

                <div className={styles.MiddleMenu}>
                  <a href="solutions/primary#payment" className={styles.MiddleMenuLink}>
                    Payment Modules
                  </a>
                  <a href="solutions/primary#compliance" className={styles.MiddleMenuLink}>
                    Compliance
                  </a>
                  <a href="solutions/primary#communicator" className={styles.MiddleMenuLink}>
                    Communicator
                  </a>
                  <a href="solutions/primary#organization" className={styles.MiddleMenuLink}>
                    Organization Manager
                  </a>
                </div>

                <div className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_1)}>
                  <a href="solutions/primary#affiliate" className={styles.CircleLink}>
                    affiliate manager
                  </a>
                </div>
                <div className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_2)}>
                  <a href="solutions/primary#reporting" className={styles.CircleLink}>
                    Reports
                  </a>
                </div>
                <div className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_3)}>
                  <a href="solutions/primary#marketing" className={styles.CircleLink}>
                    marketing tools
                  </a>
                </div>
                <div className={cn(styles.CircleLinkWrap, styles.CircleLinkWrap_4)}>
                  <a href="solutions/primary#deals" className={styles.CircleLink}>
                    deals manager
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
