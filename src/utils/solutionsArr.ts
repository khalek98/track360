import AffiliateManagerSVG from "@/assets/icons/solutions/AffiliateManager.svg";
import OrganizationManagerSVG from "@/assets/icons/solutions/OrganizationManager.svg";
import MarketingToolsSVG from "@/assets/icons/solutions/Marketingtools.svg";
import DealsManagerSvg from "@/assets/icons/solutions/DealsManager.svg";
import PaymentModulesSVG from "@/assets/icons/solutions/PaymentModules.svg";
import ReportingSVG from "@/assets/icons/solutions/Reporting.svg";
import IntegrationSVG from "@/assets/icons/solutions/Integration.svg";
import MigrationSVG from "@/assets/icons/solutions/Migration.svg";

export interface Solution {
  id: number;
  img: any;
  title: string;
  link: string;
}

export const solutionArr: Solution[] = [
  {
    id: 1,
    img: AffiliateManagerSVG,
    title: "Affiliate Manager",
    link: "/solutions/primary#affiliate",
  },
  {
    id: 2,
    img: OrganizationManagerSVG,
    title: "Organization Manager",
    link: "/solutions/primary#organization",
  },
  {
    id: 3,
    img: MarketingToolsSVG,
    title: "Marketing tools",
    link: "/solutions/primary#marketing",
  },
  {
    id: 4,
    img: DealsManagerSvg,
    title: "Deals Manager",
    link: "/solutions/primary#deals",
  },
  {
    id: 5,
    img: PaymentModulesSVG,
    title: "Payment Modules",
    link: "/solutions/primary#payment",
  },
  {
    id: 6,
    img: ReportingSVG,
    title: "Reporting",
    link: "/solutions/primary#reporting",
  },
  {
    id: 7,
    img: IntegrationSVG,
    title: "Integration",
    link: "/solutions/secondary#integration",
  },
  {
    id: 8,
    img: MigrationSVG,
    title: "Migration",
    link: "/solutions/secondary#migration",
  },
];
