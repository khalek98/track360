import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";

import styles from "./CookieBar.module.scss";

interface CookiesProps {
  setCookies: () => void;
}

const CookieBar: FC<CookiesProps> = ({ setCookies }) => {
  return (
    <div className={styles.CookieBar}>
      <div className={styles.Inner}>
        <span className={styles.Message}>
          We use cookies to provide our services. By using this website, you agree to this.
        </span>
        <span className={styles.Buttons}>
          <button onClick={() => setCookies()} type="button" className={styles.Button}>
            Ok
          </button>
          <Link href="cookies" target="_blank" className={styles.Link}>
            More information
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CookieBar;
