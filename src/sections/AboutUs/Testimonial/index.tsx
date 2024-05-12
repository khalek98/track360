// @ts-nocheck
import React from "react";
import { useTranslation } from "next-i18next";

import styles from "./Testimonial.module.scss";

const Testimonial = () => {
  const { t } = useTranslation("about");

  return (
    <section className={styles.Section}>
      <div className={styles.CircleDashed}></div>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>{t("What our client says")}</h2>

          <div className={styles.Slider}>
            <div className={styles.SliderInner}>
              <div className={styles.SliderItem}>
                <p className={styles.Recomendation}>
                  I have had the pleasure of working with Track 360 for the past year, and I can
                  confidently say that they have been a game-changer for my business. Their level of
                  professionalism, expertise, and dedication is unmatched. They have become an
                  invaluable partner in my success.
                </p>

                <div className={styles.Persone}>Sophia Martinez</div>
                <div className={styles.Position}>CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
