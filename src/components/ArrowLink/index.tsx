import React, { FC } from "react";
import { Link } from "react-scroll";

import styles from "./ArrowLink.module.scss";

interface IArrowLink {
  arrowLink: string;
}

const ArrowLink: FC<IArrowLink> = ({ arrowLink }) => {
  return (
    <Link to={arrowLink} smooth={true} duration={500} className={styles.ArrowWrapper}>
      <div className={styles.Arrow}></div>
      <div className={styles.Arrow}></div>
      <div className={styles.Arrow}></div>
    </Link>
  );
};

export default ArrowLink;
