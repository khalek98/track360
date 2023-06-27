import React from "react";

import styles from "./Trigger.module.scss";

import { useAppContext } from "@/context/AppContext";

const Trigger = () => {
  const { setShowRequestDemo } = useAppContext();

  return (
    <section className={styles.Trigger}>
      <div className="container">
        <div className={styles.TriggerWrapper}>
          <h2 className={styles.Title}>
            <span>Achieve</span> your business goals through the power of
            <span> affiliate marketing</span>
          </h2>
          <button onClick={() => setShowRequestDemo(true)} className={styles.Button}>
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trigger;
