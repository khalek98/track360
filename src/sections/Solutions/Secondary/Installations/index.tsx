import React from "react";

import styles from "./Installations.module.scss";
import { Trans, useTranslation } from "react-i18next";

const Installations = () => {
  const { t } = useTranslation("solutions");

  return (
    <section id="installations" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>{t("secondary.installations.title")}</h2>
          <p className={styles.Text}>
            <Trans
              key={"secondary.installations.descr"}
              defaults={t("secondary.installations.descr")}
              components={{ span: <span /> }}
            />
          </p>

          <ul className={styles.BlocksWrapper}>
            <li className={styles.Block}>
              <div className={styles.BlockImg}></div>
              <h3 className={styles.BlockTitle}>{t("secondary.installations.blocks.0.title")}</h3>
              <ul className={styles.BlockList}>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.0.items.0")}
                </li>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.0.items.1")}
                </li>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.0.items.2")}
                </li>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.0.items.3")}
                </li>
              </ul>
            </li>

            <li className={styles.Block}>
              <div className={styles.BlockImg}></div>
              <h3 className={styles.BlockTitle}>SaaS</h3>
              <ul className={styles.BlockList}>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.1.items.0")}
                </li>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.1.items.1")}
                </li>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.1.items.2")}
                </li>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.1.items.3")}
                </li>
                <li className={styles.BlockItem}>
                  {t("secondary.installations.blocks.1.items.4")}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Installations;
