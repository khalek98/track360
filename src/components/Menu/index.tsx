import React from "react";
import cn from "classnames";

import styles from "./Menu.module.scss";
import { menuList } from "@/utils/menuList";
import { useAppContext } from "@/context/AppContext";

interface IMenu {
  className?: string;
}

const Menu: React.FC<IMenu> = ({ className }) => {
  const { pathname } = useAppContext();

  return (
    <nav className={(cn(styles.Nav), className)}>
      <ul className={styles.Menu}>
        {menuList.map(({ menuLink, menuName }) => (
          <li className={styles.MenuItem} key={menuName}>
            <a
              href={menuLink}
              className={cn(styles.MenuLink, {
                [styles.MenuLinkActive]: pathname === menuLink,
              })}
            >
              {menuName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
