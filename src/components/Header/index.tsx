import React, { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";
import Link from "next/link";

import styles from "./Header.module.scss";

import Logo from "@/assets/icons/logo.svg";
import ArrowSvg from "./MenuArrow.svg";
import { menuList, submenuList } from "@/utils/menuList";
import { useAppContext } from "@/context/AppContext";

interface IHeaderProps {
  darkMode?: boolean;
}

const Header: FC<IHeaderProps> = ({ darkMode }) => {
  const [fixedHeader, setFixedHeader] = useState<boolean>(false);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const { pathname, setShowRequestDemo } = useAppContext();

  useEffect(() => {
    if (showSubmenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSubmenu]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
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
  });

  const onCloseMenu = () => {
    setShowSubmenu(false);
  };

  return (
    <header id="header" className={cn(styles.Header, { [styles.HeaderFixed]: fixedHeader })}>
      <nav
        className={cn(styles.SubNav, { [styles.SubNavActive]: showSubmenu })}
        onClick={onCloseMenu}
      >
        <ul
          className={cn(
            styles.Submenu,
            { [styles.SubmenuActive]: showSubmenu },
            { [styles.SubmenuOut]: !showSubmenu },
          )}
          onMouseLeave={onCloseMenu}
        >
          {submenuList.map(({ menuLink, menuName }) => (
            <li className={styles.SubmenuItem} key={menuName}>
              <a href={menuLink} className={cn(styles.SubmenuLink)}>
                {menuName}
              </a>
            </li>
          ))}
        </ul>
        <div className={cn(styles.BlurBg, { [styles.BlurBgOut]: !showSubmenu })}></div>
      </nav>
      <div className="container">
        <div className={styles.HeaderWrapper}>
          <Link href="/" className={styles.LogoWrapper}>
            <Logo
              className={cn(styles.Logo, {
                [styles.LogoDark]: darkMode && !fixedHeader && !showSubmenu,
              })}
            />
          </Link>
          <nav className={cn(styles.Nav)}>
            <ul className={styles.Menu}>
              {menuList.map(({ menuLink, menuName }, index) => (
                <li className={cn(styles.MenuItem)} key={menuName}>
                  <a
                    href={menuLink}
                    onMouseEnter={() => {
                      index === 1 ? setShowSubmenu(true) : setShowSubmenu(false);
                    }}
                    className={cn(
                      styles.MenuLink,
                      {
                        [styles.LinkDark]: darkMode && !fixedHeader && !showSubmenu,
                      },
                      {
                        [styles.MenuLinkActive]: pathname === menuLink,
                      },
                      { [styles.MenuLinkActive]: index === 1 && showSubmenu },
                      {
                        [styles.MenuLinkActive]: index === 1 && pathname === "/solutions/secondary",
                      },
                    )}
                  >
                    {menuName}
                    {menuName === "Our Solutions" && <ArrowSvg />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setShowRequestDemo(true)}
            className={cn(styles.Button, {
              [styles.ButtonDark]: darkMode && !fixedHeader && !showSubmenu,
            })}
          >
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
