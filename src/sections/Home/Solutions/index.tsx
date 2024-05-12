import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Solutions.module.scss";

import { SolutionArr } from "@/utils/solutionsArr";

const Solutions = () => {
  const { t } = useTranslation("home");
  const solutionArr = SolutionArr();

  return (
    <section className={styles.Solutions}>
      <div className="container">
        <div className={styles.SolutionsWrapper}>
          <h2
            className={styles.Title}
            dangerouslySetInnerHTML={{ __html: t("solutions.title") }}
          ></h2>

          <ul className={styles.SolutionsList}>
            {solutionArr.map(({ key, img: Img, title, link }) => (
              <li key={key}>
                <a href={link} className={styles.SolutionsItem}>
                  <Img className={styles.SolutionsImg} />
                  <h3 className={styles.SolutionsTitle}>{title}</h3>
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
