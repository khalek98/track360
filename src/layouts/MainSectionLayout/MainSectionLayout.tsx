import React, { FC } from "react";
import cn from "classnames";

import styles from "./MainSectionLayout.module.scss";
import { Link } from "react-scroll";

interface IMainSectionLayout {
  circle?: boolean;
  arrowLink: string;
}
const MainSectionLayout: FC<IMainSectionLayout> = ({ arrowLink, circle = true }) => {
  return (
    <>
      <div className={styles.CircleeDashed}>
        <div className={cn(styles.CircleFilled, [{ [styles.dn]: !circle }])}></div>
      </div>
      <div className={styles.CircleeDashed}>
        <div className={styles.Inner}>
          <div className={styles.CircleFilled}></div>
        </div>
      </div>
      <Link to={arrowLink} smooth={true} duration={500} className={styles.ArrowWrapper}>
        <div className={styles.Arrow}></div>
        <div className={styles.Arrow}></div>
        <div className={styles.Arrow}></div>
      </Link>
    </>
  );
};

export default MainSectionLayout;
