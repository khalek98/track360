import React from "react";

import styles from "./Trigger.module.scss";
import { useAppContext } from "@/context/AppContext";

const Trigger = () => {
  const { setShowContactUs } = useAppContext();

  return (
    <section className={styles.Trigger}>
      <div className="container">
        <div className={styles.TriggerWrapper}>
          <h2 className={styles.Title}>
            Not sure about <span>which plan</span> will suit you best?
          </h2>
          <button className={styles.Button} onClick={() => setShowContactUs(true)}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trigger;
