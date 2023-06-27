import React from "react";

import styles from "./Solutions.module.scss";

import { solutionArr } from "@/utils/solutionsArr";

const Solutions = () => {
  return (
    <section className={styles.Solutions}>
      <div className="container">
        <div className={styles.SolutionsWrapper}>
          <h2 className={styles.Title}>Explore our solutions</h2>

          <ul className={styles.SolutionsList}>
            {solutionArr.map(({ id, img: Img, title, link }) => (
              <li key={id}>
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
