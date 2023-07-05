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
            Are you interested in an <span>on-premise installation</span> or not sure{" "}
            <span>which plan</span> is best for you?
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
