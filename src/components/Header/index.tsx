// @ts-nocheck
import React, { FC, useEffect, useState } from "react";
import cn from "classnames";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import styles from "./Header.module.scss";
import footerStyles from "../Footer/Footer.module.scss";

import Logo from "@/assets/icons/logo.svg";
import ArrowSvg from "./MenuArrow.svg";
import { IMenuList } from "@/utils/menuList";
import { useAppContext } from "@/context/AppContext";

type IHeaderProps = {
  darkMode?: boolean;
};

const Header: FC<IHeaderProps> = ({ darkMode }) => {
  const { t } = useTranslation();

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
  const submenuList: IMenuList[] = [
    {
      menuName: t("menu.affiliate", { ns: "home" }),
      menuLink: "/solutions/primary#affiliate",
    },
    {
      menuName: t("menu.reporting", { ns: "home" }),
      menuLink: "/solutions/primary#reporting",
    },
    {
      menuName: t("menu.compliance", { ns: "home" }),
      menuLink: "/solutions/primary#compliance",
    },
    {
      menuName: t("menu.communicator", { ns: "home" }),
      menuLink: "/solutions/primary#communicator",
    },
    {
      menuName: t("menu.marketing", { ns: "home" }),
      menuLink: "/solutions/primary#marketing",
    },
    {
      menuName: t("menu.deals", { ns: "home" }),
      menuLink: "/solutions/primary#deals",
    },
    {
      menuName: t("menu.payment", { ns: "home" }),
      menuLink: "/solutions/primary#payment",
    },
    {
      menuName: t("menu.organization", { ns: "home" }),
      menuLink: "/solutions/primary#organization",
    },
    {
      menuName: t("menu.installation", { ns: "home" }),
      menuLink: "/solutions/secondary#installations",
    },
    {
      menuName: t("menu.migration", { ns: "home" }),
      menuLink: "/solutions/secondary#migration",
    },
    {
      menuName: t("menu.integration", { ns: "home" }),
      menuLink: "/solutions/secondary#integration",
    },
  ];

  const [fixedHeader, setFixedHeader] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const [showContactUMenu, setShowContactUsMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { pathname, setShowRequestDemo, setShowContactUs } = useAppContext();
  const [partnershipActive, setPartnershipActive] = useState<boolean>(false);

  useEffect(() => {
    const partnershipSection = document.querySelector("#partnership") as HTMLElement;

    if (window.scrollY > 1) {
      setFixedHeader(true);
    }

    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 1) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }

      setPartnershipActive(window.scrollY + 1 >= partnershipSection?.offsetTop);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 1) {
          setFixedHeader(true);
        } else {
          setFixedHeader(false);
        }
      });
    };
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 992);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 992);
      });
    };
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  const onCloseSubMenu = () => {
    setShowSubmenu(false);
  };

  const onShowMenu = () => {
    setOpenMenu(true);
  };

  const onCloseMenu = () => {
    setOpenMenu(false);
    setShowSubmenu(false);
    setShowContactUsMenu(false);
  };

  const onToggleMenu = () => {
    if (openMenu) {
      onCloseMenu();
    } else {
      onShowMenu();
    }
  };

  return (
    <header
      id="header"
      className={cn(
        styles.Header,
        { [styles.HeaderFixed]: fixedHeader },
        { [styles.HeaderDark]: darkMode },
      )}
    >
      <div className="container">
        <div className={styles.HeaderWrapper}>
          <Link href="/" className={styles.LogoWrapper}>
            <Logo onClick={onCloseMenu} className={cn(styles.Logo)} />
          </Link>

          <nav className={cn(styles.Nav, { [styles.NavMobileActive]: openMenu })}>
            <ul className={cn(styles.Menu)}>
              {menuList.map(({ menuLink, menuName }, index: number) => (
                <li
                  className={cn(styles.MenuItem, { [styles.MenuItemActive]: showSubmenu })}
                  key={menuName}
                  onMouseEnter={() => {
                    !isMobile && index === 1 ? setShowSubmenu(true) : setShowSubmenu(false);
                  }}
                >
                  <Link
                    href={menuLink}
                    onClick={() => {
                      index !== 1 && onCloseMenu();
                    }}
                    className={cn(
                      styles.MenuLink,
                      {
                        [styles.MenuLinkActive]: pathname === menuLink && !partnershipActive,
                      },
                      { [styles.MenuLinkActive]: index === 1 && showSubmenu },
                      {
                        [styles.MenuLinkActive]: index === 1 && pathname === "/solutions/secondary",
                      },
                      {
                        [styles.MenuLinkActive]:
                          partnershipActive && menuLink === "/about#partnership",
                      },
                    )}
                  >
                    {menuName}
                    {menuLink === "/solutions/primary" && (
                      <ArrowSvg
                        onClick={(e: React.SyntheticEvent) => {
                          e.preventDefault();
                          index === 1 ? setShowSubmenu(!showSubmenu) : onCloseMenu();
                        }}
                        className={cn(styles.Arrow, { [styles.ArrowActive]: showSubmenu })}
                      />
                    )}
                  </Link>

                  {index === 1 && (
                    <nav
                      className={cn(styles.SubNav, { [styles.SubNavActive]: showSubmenu })}
                      onClick={onCloseSubMenu}
                    >
                      <ul
                        className={cn(
                          styles.Submenu,
                          { [styles.SubmenuActive]: showSubmenu },
                          { [styles.SubmenuOut]: !showSubmenu },
                        )}
                        onMouseLeave={() => !isMobile && onCloseSubMenu}
                      >
                        {submenuList.map(({ menuLink, menuName }) => (
                          <li className={styles.SubmenuItem} key={menuName}>
                            <Link
                              onClick={onCloseMenu}
                              href={menuLink}
                              className={cn(styles.SubmenuLink)}
                            >
                              {menuName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div
                        onMouseEnter={() => setShowSubmenu(false)}
                        className={cn(styles.BlurBg, { [styles.BlurBgOut]: !showSubmenu })}
                      ></div>
                    </nav>
                  )}
                </li>
              ))}

              <li className={cn(styles.MenuItem, styles.MenuItemMobile)}>
                <div
                  onClick={() => setShowContactUsMenu(!showContactUMenu)}
                  className={cn(styles.MenuLink)}
                >
                  {t("contactUs", { ns: "buttons" })}
                  <ArrowSvg
                    className={cn(styles.Arrow, { [styles.ArrowActive]: showContactUMenu })}
                  />
                </div>

                {showContactUMenu && (
                  <ul className={cn(footerStyles.ContactsList, styles.ContactsList)}>
                    <li className={footerStyles.ContactsItem}>
                      <h5 className={footerStyles.ContactTitle}>
                        {t("mailTitle", { ns: "footer" })}
                      </h5>
                      <a href="mailto:sales@proline.ltd" className={footerStyles.Mail}>
                        sales@proline.ltd
                      </a>
                    </li>
                    <li className={footerStyles.ContactsItem}>
                      <h5 className={footerStyles.ContactTitle}>
                        {t("addressTitle", { ns: "footer" })}
                      </h5>
                      <address className={footerStyles.Address}>
                        Proline Technologies Ltd Levi Eshkol 68, Kiryat Ono, Israel
                      </address>
                    </li>
                  </ul>
                )}
              </li>
              <div className={styles.MobileBtnGroup}>
                <button
                  onClick={() => {
                    onCloseMenu();
                    setShowRequestDemo(true);
                  }}
                  className={cn(styles.MobileBtn, styles.BtnRequest)}
                >
                  {t("requestDemo", { ns: "buttons" })}
                </button>
                <button
                  onClick={() => {
                    onCloseMenu();
                    setShowContactUs(true);
                  }}
                  className={cn(styles.MobileBtn, styles.BtnContact)}
                >
                  {t("contactUs", { ns: "buttons" })}
                </button>
              </div>
            </ul>
          </nav>

          <button onClick={() => setShowRequestDemo(true)} className={cn(styles.Button)}>
            {t("requestDemo", { ns: "buttons" })}
          </button>

          <button
            onClick={() => onToggleMenu()}
            className={cn(styles.Hamburger, { [styles.HamburgerActive]: openMenu })}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
