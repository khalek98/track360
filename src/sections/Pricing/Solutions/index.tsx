import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Solutions.module.scss";

import ArrowSVG from "./arrow.svg";
import { SolutionArr } from "@/utils/solutionsArr";

const Solutions = () => {
  const { t } = useTranslation("price");
  const solutionArr = SolutionArr();

  return (
    <section className={styles.Solutions}>
      <div className="container">
        <div className={styles.SolutionsWrapper}>
          <h2 className={styles.Title}>{t("Explore our solutions")}</h2>

          <ul className={styles.SolutionsList}>
            {solutionArr.map(({ key, img: Img, title, link }) => (
              <li key={key}>
                <a href={link} className={styles.SolutionsItem}>
                  <Img className={styles.SolutionsImg} />
                  <h3 className={styles.SolutionsTitle}>{title}</h3>
                  <div className={styles.SolutionsLink}>
                    {t("Explore")} <ArrowSVG />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
