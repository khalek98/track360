// @ts-nocheck
import React from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";

import styles from "./Main.module.scss";
import ArrowLink from "@/components/ArrowLink";

const Main = () => {
  const { t } = useTranslation("solutions");

  return (
    <section className={styles.Main}>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_1)}></div>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_2)}>
        <div className={styles.Inner}>
          <div className={cn(styles.CircleFilled, styles.CircleFilled_2)}></div>
        </div>
      </div>

      <ArrowLink arrowLink="affiliate" />
      <div className="container">
        <div className={styles.MainWrapper}>
          <h1 className={styles.Subtitle}>{t("primary.main.title")}</h1>
          <h2 className={styles.Title}>{t("primary.main.subtitle")}</h2>
          <p
            className={styles.Text}
            dangerouslySetInnerHTML={{ __html: t("primary.main.text1") }}
          ></p>
          <p
            className={styles.Text}
            dangerouslySetInnerHTML={{ __html: t("primary.main.text2") }}
          ></p>
        </div>
      </div>
    </section>
  );
};

export default Main;
