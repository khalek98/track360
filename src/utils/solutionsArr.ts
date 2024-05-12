import { useTranslation } from "react-i18next";

import AffiliateManagerSVG from "@/assets/icons/solutions/AffiliateManager.svg";
import OrganizationManagerSVG from "@/assets/icons/solutions/OrganizationManager.svg";
import MarketingToolsSVG from "@/assets/icons/solutions/Marketingtools.svg";
import DealsManagerSvg from "@/assets/icons/solutions/DealsManager.svg";
import PaymentModulesSVG from "@/assets/icons/solutions/PaymentModules.svg";
import ReportingSVG from "@/assets/icons/solutions/Reporting.svg";
import IntegrationSVG from "@/assets/icons/solutions/Integration.svg";
import MigrationSVG from "@/assets/icons/solutions/Migration.svg";

export interface Solution {
  key: number;
  img: any;
  title: string;
  link: string;
}

export const SolutionArr: () => Solution[] = () => {
  const { t } = useTranslation("home");

  return [
    {
      key: 1,
      img: AffiliateManagerSVG,
      title: t("menu.affiliate"),
      link: "/solutions/primary#affiliate",
    },
    {
      key: 2,
      img: OrganizationManagerSVG,
      title: t("menu.organization"),
      link: "/solutions/primary#organization",
    },
    {
      key: 3,
      img: MarketingToolsSVG,
      title: t("menu.marketing"),
      link: "/solutions/primary#marketing",
    },
    {
      key: 4,
      img: DealsManagerSvg,
      title: t("menu.deals"),
      link: "/solutions/primary#deals",
    },
    {
      key: 5,
      img: PaymentModulesSVG,
      title: t("menu.payment"),
      link: "/solutions/primary#payment",
    },
    {
      key: 6,
      img: ReportingSVG,
      title: t("menu.reporting"),
      link: "/solutions/primary#reporting",
    },
    {
      key: 7,
      img: IntegrationSVG,
      title: t("menu.integration"),
      link: "/solutions/secondary#integration",
    },
    {
      key: 8,
      img: MigrationSVG,
      title: t("menu.migration"),
      link: "/solutions/secondary#migration",
    },
  ];
};

export default SolutionArr;
