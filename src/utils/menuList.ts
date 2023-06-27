interface IMenuList {
  menuName: string;
  menuLink: string;
}

export const menuList: IMenuList[] = [
  {
    menuName: "Home",
    menuLink: "/",
  },
  {
    menuName: "Our Solutions",
    menuLink: "/solutions/primary",
  },
  {
    menuName: "Pricing",
    menuLink: "/pricing",
  },
  {
    menuName: "Partnership",
    menuLink: "/about#partnership",
  },
  {
    menuName: "About Us",
    menuLink: "/about",
  },
];

export const submenuList: IMenuList[] = [
  {
    menuName: "Affiliate Manager",
    menuLink: "/solutions/primary#affiliate",
  },
  {
    menuName: "Reporting",
    menuLink: "/solutions/primary#reporting",
  },
  {
    menuName: "Compliance",
    menuLink: "/solutions/primary#compliance",
  },
  {
    menuName: "Communicator",
    menuLink: "/solutions/primary#communicator",
  },
  {
    menuName: "Marketing tools",
    menuLink: "/solutions/primary#marketing",
  },
  {
    menuName: "Deals Manager",
    menuLink: "/solutions/primary#deals",
  },
  {
    menuName: "Payment Modules",
    menuLink: "/solutions/primary#payment",
  },
  {
    menuName: "Organization Manager",
    menuLink: "/solutions/primary#organization",
  },
  {
    menuName: "Integration",
    menuLink: "/solutions/secondary#integration",
  },
  {
    menuName: "Migration",
    menuLink: "/solutions/secondary#migration",
  },
  {
    menuName: "Installations",
    menuLink: "/solutions/secondary#installations",
  },
];
