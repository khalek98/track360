// @ts-nocheck
import { useTranslation } from "react-i18next";

const FeeList: () => string[] = () => {
  const { t } = useTranslation("price");

  return [
    t("Users creation"),
    t("KPIs creation"),
    t("Creative tools setup"),
    t("Permissions"),
    t("Deals creation"),
  ];
};

type IncludeType = {
  id: string;
  title: string;
  text?: string;
  value: string;
  curr?: boolean;
};

type pricePackage = {
  id: string;
  packageTitle: string;
  packageDescr: string;
  priceMO: {
    curr?: string;
    value?: string;
    months: boolean;
    descr?: string;
  };
  includes: IncludeType[];
  feeList: string[];
  features: string[];
};

export const PricePackageArr: () => pricePackage[] = () => {
  const { t } = useTranslation("price");

  const feeList = FeeList();

  return [
    {
      id: "Start Up",
      packageTitle: t("Start Up"),
      packageDescr: t("Suitable for small businesses with a limited budget."),
      priceMO: {
        curr: "€",
        value: "199",
        months: true,
        descr: t("(Prepaid for 3 months)"),
      },
      includes: [
        {
          id: "Leads per month",
          title: t("Leads per month"),
          text: t("Up to"),
          value: "500",
        },
        {
          id: "Setup fee",
          title: t("Setup fee*"),
          value: t("Free"),
        },
      ],
      feeList,
      features: [
        t("Training Docs"),
        t("Basic cloud storage and server hosting for 1 user"),
        t("Limited customer support"),
      ],
    },

    {
      id: "Standard",
      packageTitle: t("Standard"),
      packageDescr: t("Suitable for medium-sized businesses."),
      priceMO: {
        curr: "€",
        value: "1,450",
        months: true,
      },
      includes: [
        {
          id: "Leads per month",
          title: t("Leads per month"),
          text: t("Up to"),
          value: "2 500",
        },
        {
          id: "Setup fee",
          title: t("Setup fee*"),
          value: "950",
          curr: true,
        },
        {
          id: `Integration with CRM,
        Website, Third-party
        system`,
          title: t("Integration with CRM, Website, Third-party system**"),
          value: "1,500",
          curr: true,
        },
        {
          id: "Migration",
          title: t("Migration**"),
          value: "1,000 - 5,000",
          curr: true,
        },
      ],
      feeList,
      features: [
        t("Training"),
        t("Increased storage and server hosting for up to 5 users"),
        t("Priority customer support"),
      ],
    },

    {
      id: "Premium",
      packageTitle: t("Premium"),
      packageDescr: t("Suitable for larger businesses with more complex needs."),
      priceMO: {
        curr: "€",
        value: "2,950",
        months: true,
      },
      includes: [
        {
          id: "Leads per month",
          title: t("Leads per month"),
          text: t("Up to"),
          value: "10 000",
        },
        {
          id: "Setup fee",
          title: t("Setup fee*"),
          value: "1,950",
          curr: true,
        },
        {
          id: `Integration with CRM,
        Website, Third-party
        system`,
          title: t("Integration with CRM, Website, Third-party system**"),
          value: "3,000",
          curr: true,
        },
        {
          id: "Migration",
          title: t("Migration**"),
          value: "1,000 - 5,000",
          curr: true,
        },
      ],
      feeList,
      features: [
        t("Training"),
        t("Advanced cloud storage and server hosting for up to 10 users"),
        t("Dedicated account manager during working hours"),
      ],
    },

    {
      id: "Enterprise",
      packageTitle: t("Enterprise"),
      packageDescr: t("Suitable for large businesses with extensive requirements."),
      priceMO: {
        value: t("Call Us"),
        months: false,
      },
      includes: [
        {
          id: "Leads per month",
          title: t("Leads per month"),
          value: t("Unlimited"),
        },
        {
          id: "Setup fee",
          title: t("Setup fee*"),
          value: t("Call Us"),
        },
        {
          id: `Integration with CRM,
        Website, Third-party
        system`,
          title: t("Integration with CRM, Website, Third-party system**"),
          value: t("Included"),
        },
        {
          id: "Migration",
          title: t("Migration**"),
          value: t("Call Us"),
        },
      ],
      feeList,
      features: [
        t("Training"),
        t("Customized cloud platform"),
        t("Unlimited storage and server hosting for a large number of users"),
        t(
          "Enterprise-level customer support with dedicated technical account manager and personalized service",
        ),
      ],
    },
  ];
};
