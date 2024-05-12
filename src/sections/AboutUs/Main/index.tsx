import React from "react";
import cn from "classnames";
import { Trans, useTranslation } from "react-i18next";

import styles from "./Main.module.scss";
import ArrowLink from "@/components/ArrowLink";

const Main = () => {
  const { t } = useTranslation("about");

  return (
    <section className={styles.Main}>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_1)}>
        <div className={cn(styles.CircleFilled, styles.CircleFilled_1)}></div>
      </div>
      <div className={cn(styles.CircleeDashed, styles.CircleeDashed_2)}>
        <div className={styles.Inner}>
          <div className={cn(styles.CircleFilled, styles.CircleFilled_2)}></div>
        </div>
      </div>
      <ArrowLink arrowLink="team" />
      <div className="container">
        <div className={styles.MainWrapper}>
          <h1 className={styles.Subtitle}>{"who we are"}</h1>
          <h2 className={styles.Title}>
            {t("About")} <span>Track 360</span>
          </h2>
          <p className={styles.Text}>
            <Trans
              key={"mainDescr1"}
              defaults={t("mainDescr1")}
              components={{ span_white: <span className={styles.SpanStyled} />, span: <span /> }}
            />
          </p>
          <p className={styles.Text}>
            <Trans
              key={"mainDescr2"}
              defaults={t("mainDescr2")}
              components={{ span_white: <span className={styles.SpanStyled} />, span: <span /> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
