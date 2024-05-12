import React from "react";
import cn from "classnames";
import NextLink from "next/link";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.scss";
import Logo from "@/assets/icons/logo.svg";

import { useAppContext } from "@/context/AppContext";
import { IMenuList } from "@/utils/menuList";

const Footer = () => {
  const { t } = useTranslation(["footer", "home"]);
  const { pathname } = useAppContext();

  const menuList: IMenuList[] = [
    {
      menuName: t("menu.home", { ns: "home" }),
      menuLink: "/",
    },
    {
      menuName: t("menu.solutions", { ns: "home" }),
      menuLink: "/solutions/primary",
    },
    {
      menuName: t("menu.pricing", { ns: "home" }),
      menuLink: "/pricing",
    },
    {
      menuName: t("menu.partnership", { ns: "home" }),
      menuLink: "/about#partnership",
    },
    {
      menuName: t("menu.about", { ns: "home" }),
      menuLink: "/about",
    },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className={styles.Footer}>
      <div className="container">
        <div className={styles.FooterWrapper}>
          <NextLink href="/" className={styles.LogoWrapper}>
            <Logo className={styles.Logo} />
          </NextLink>

          <div className={styles.MenuWrapper}>
            <h4 className={styles.FooterTitle}>{t("menuTitle")}</h4>

            <nav className={cn(styles.Nav)}>
              <ul className={styles.Menu}>
                {menuList.map(({ menuLink, menuName }, index) => (
                  <li className={styles.MenuItem} key={menuName}>
                    <a
                      href={menuLink}
                      className={cn(
                        styles.MenuLink,
                        {
                          [styles.MenuLinkActive]: pathname === menuLink,
                        },
                        {
                          [styles.MenuLinkActive]:
                            index === 1 && pathname === "/solutions/secondary",
                        },
                      )}
                    >
                      {menuName}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.ContactsWrapper}>
            <h4 className={styles.FooterTitle}>{t("contactTitle")}</h4>

            <ul className={styles.ContactsList}>
              <li className={styles.ContactsItem}>
                <h5 className={styles.ContactTitle}>{t("mailTitle")}</h5>
                <a href="mailto:sales@proline.ltd" className={styles.Mail}>
                  sales@proline.ltd
                </a>
              </li>
              <li className={styles.ContactsItem}>
                <h5 className={styles.ContactTitle}>{t("addressTitle")}</h5>
                <address className={styles.Address}>
                  Proline Technologies Ltd Levi Eshkol 68, Kiryat Ono, Israel
                </address>
              </li>
            </ul>
          </div>

          <div className={styles.TermsWrapper}>
            <h4 className={styles.FooterTitle}>{t("termsTitle")}</h4>
            <ul className={styles.TermsList}>
              <li className={styles.TermsItem}>
                <Link href="/terms" className={styles.TermsLink}>
                  {t("terms")}
                </Link>
              </li>
              <li className={styles.TermsItem}>
                <Link href="/privacy" className={styles.TermsLink}>
                  {t("privacy")}
                </Link>
              </li>
            </ul>

            <div className={styles.Label}>
              ©{t("copyright")} {new Date().getFullYear()}
            </div>
          </div>

          <div onClick={scrollToTop} className={styles.Arrow}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
