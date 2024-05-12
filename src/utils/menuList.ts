export interface IMenuList {
  menuName: string;
  menuLink: string;
}

// export const MenuList: () => IMenuList[] = () => {
//   const { t } = useTranslation("home");

//   return [
//     {
//       menuName: t("menu.home"),
//       menuLink: "/",
//     },
//     {
//       menuName: t("menu.solutions"),
//       menuLink: "/solutions/primary",
//     },
//     {
//       menuName: t("menu.pricing"),
//       menuLink: "/pricing",
//     },
//     {
//       menuName: t("menu.partnership"),
//       menuLink: "/about#partnership",
//     },
//     {
//       menuName: t("menu.about"),
//       menuLink: "/about",
//     },
//   ];
// };

// export const SubmenuList: () => IMenuList[] = () => {
//   const { t } = useTranslation("home");

//   return [
//     {
//       menuName: t("menu.affiliate"),
//       menuLink: "/solutions/primary#affiliate",
//     },
//     {
//       menuName: t("menu.reporting"),
//       menuLink: "/solutions/primary#reporting",
//     },
//     {
//       menuName: t("menu.compliance"),
//       menuLink: "/solutions/primary#compliance",
//     },
//     {
//       menuName: t("menu.communicator"),
//       menuLink: "/solutions/primary#communicator",
//     },
//     {
//       menuName: t("menu.marketing"),
//       menuLink: "/solutions/primary#marketing",
//     },
//     {
//       menuName: t("menu.deals"),
//       menuLink: "/solutions/primary#deals",
//     },
//     {
//       menuName: t("menu.payment"),
//       menuLink: "/solutions/primary#payment",
//     },
//     {
//       menuName: t("menu.organization"),
//       menuLink: "/solutions/primary#organization",
//     },
//     {
//       menuName: t("menu.installation"),
//       menuLink: "/solutions/secondary#installations",
//     },
//     {
//       menuName: t("menu.migration"),
//       menuLink: "/solutions/secondary#migration",
//     },
//     {
//       menuName: t("menu.integration"),
//       menuLink: "/solutions/secondary#integration",
//     },
//   ];
// };
