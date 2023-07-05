import React from "react";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";

import styles from "./Communicator.module.scss";

import CommunicatorImg from "./Communicator.svg";
import { useAppContext } from "@/context/AppContext";

const Communicator = () => {
  const { setShowRequestDemo } = useAppContext();
  return (
    <section id="communicator" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <Zoom deley={500}>
            <div className={styles.ImgWrapper}>
              <CommunicatorImg className={styles.Screenshot} />
            </div>
          </Zoom>

          <Fade right>
            <h2 className={styles.Title}>Communicator</h2>
          </Fade>
          <Fade right delay={500}>
            <p className={styles.Text}>
              Track 360 provides various ways to communicate with your registered affiliates,
              whether you want to announce promotions, updates, support, or anything else that needs
              to be conveyed. You can do so via:
            </p>
          </Fade>

          <ul className={styles.List}>
            <Fade right delay={100}>
              <li className={styles.ListItem}>Direct Email</li>
            </Fade>
            <Fade right delay={200}>
              <li className={styles.ListItem}>In-platform chat & messaging</li>
            </Fade>
            <Fade right delay={300}>
              <li className={styles.ListItem}>Newsletters & Notifications</li>
            </Fade>
            <Fade right delay={400}>
              <li className={styles.ListItem}>Resource center with training resources</li>
            </Fade>
          </ul>

          <button onClick={() => setShowRequestDemo(true)} className={styles.Button}>
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Communicator;
