// @ts-nocheck
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Solutions.module.scss";

import AffiliateManagerSVG from "@/assets/icons/solutions/AffiliateManager.svg";
import OrganizationManagerSVG from "@/assets/icons/solutions/OrganizationManager.svg";
import MarketingToolsSVG from "@/assets/icons/solutions/Marketingtools.svg";
import DealsManagerSvg from "@/assets/icons/solutions/DealsManager.svg";
import PaymentModulesSVG from "@/assets/icons/solutions/PaymentModules.svg";
import ReportingSVG from "@/assets/icons/solutions/Reporting.svg";
import IntegrationSVG from "@/assets/icons/solutions/Integration.svg";
import MigrationSVG from "@/assets/icons/solutions/Migration.svg";

const Solutions = () => {
  const { t } = useTranslation();
  const solutionArr = [
    {
      key: 1,
      img: AffiliateManagerSVG,
      title: t("menu.affiliate", { ns: "home" }),
      link: "/solutions/primary#affiliate",
    },
    {
      key: 2,
      img: OrganizationManagerSVG,
      title: t("menu.organization", { ns: "home" }),
      link: "/solutions/primary#organization",
    },
    {
      key: 3,
      img: MarketingToolsSVG,
      title: t("menu.marketing", { ns: "home" }),
      link: "/solutions/primary#marketing",
    },
    {
      key: 4,
      img: DealsManagerSvg,
      title: t("menu.deals", { ns: "home" }),
      link: "/solutions/primary#deals",
    },
    {
      key: 5,
      img: PaymentModulesSVG,
      title: t("menu.payment", { ns: "home" }),
      link: "/solutions/primary#payment",
    },
    {
      key: 6,
      img: ReportingSVG,
      title: t("menu.reporting", { ns: "home" }),
      link: "/solutions/primary#reporting",
    },
    {
      key: 7,
      img: IntegrationSVG,
      title: t("menu.integration", { ns: "home" }),
      link: "/solutions/secondary#integration",
    },
    {
      key: 8,
      img: MigrationSVG,
      title: t("menu.migration", { ns: "home" }),
      link: "/solutions/secondary#migration",
    },
  ];

  return (
    <section className={styles.Solutions}>
      <div className="container">
        <div className={styles.SolutionsWrapper}>
          <h2
            className={styles.Title}
            dangerouslySetInnerHTML={{ __html: t("solutions.title", { ns: "home" }) }}
          ></h2>

          <ul className={styles.SolutionsList}>
            {solutionArr.map(({ key, img: Img, title, link }) => (
              <li key={key}>
                <Link href={link} className={styles.SolutionsItem}>
                  <Img className={styles.SolutionsImg} />
                  <h3 className={styles.SolutionsTitle}>{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
