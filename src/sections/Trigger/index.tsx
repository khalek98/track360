// @ts-nocheck
import React from "react";
import { useTranslation } from "next-i18next";

import styles from "./Trigger.module.scss";

import { useAppContext } from "@/context/AppContext";

const Trigger = () => {
  const { setShowRequestDemo } = useAppContext();
  const { t } = useTranslation();

  return (
    <section className={styles.Trigger}>
      <div className="container">
        <div className={styles.TriggerWrapper}>
          <h2
            className={styles.Title}
            dangerouslySetInnerHTML={{ __html: t("trigger.title", { ns: "home" }) }}
          ></h2>
          <button onClick={() => setShowRequestDemo(true)} className={styles.Button}>
            {t("buttons:requestDemo")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trigger;
