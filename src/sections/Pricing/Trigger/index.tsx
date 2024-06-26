import React from "react";
import { Trans, useTranslation } from "react-i18next";

import styles from "./Trigger.module.scss";
import { useAppContext } from "@/context/AppContext";

const Trigger = () => {
  const { setShowContactUs } = useAppContext();
  const { t } = useTranslation(["price", "buttons"]);

  return (
    <section className={styles.Trigger}>
      <div className="container">
        <div className={styles.TriggerWrapper}>
          <h2 className={styles.Title}>
            <Trans
              key={"triggerTitle"}
              defaults={t("triggerTitle")}
              components={{ span: <span /> }}
            />
          </h2>
          <button className={styles.Button} onClick={() => setShowContactUs(true)}>
            {t("buttons:contactUs")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trigger;
