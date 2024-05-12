import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import styles from "./Solutions.module.scss";

import ArrowSVG from "./arrow.svg";
import { SolutionArr } from "@/utils/solutionsArr";

const Solutions = () => {
  const { t } = useTranslation();
  const solutionArr = SolutionArr();

  return (
    <section className={styles.Solutions}>
      <div className="container">
        <div className={styles.SolutionsWrapper}>
          <h2 className={styles.Title}>{t("Explore our solutions", { ns: "price" })}</h2>

          <ul className={styles.SolutionsList}>
            {solutionArr.map(({ key, img: Img, title, link }) => (
              <li key={key}>
                <Link href={link} className={styles.SolutionsItem}>
                  <Img className={styles.SolutionsImg} />
                  <h3 className={styles.SolutionsTitle}>{title}</h3>
                  <div className={styles.SolutionsLink}>
                    {t("Explore", { ns: "price" })} <ArrowSVG />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
