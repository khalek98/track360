const feeList: string[] = [
  "Users creation",
  "KPIs creation",
  "Creative tools setup",
  "Permissions",
  "Deals creation",
];

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
  feeList: typeof feeList;
  features: string[];
};

export const pricePackageArr: pricePackage[] = [
  {
    id: "Start Up",
    packageTitle: "Start Up",
    packageDescr: "Suitable for small businesses with a limited budget.",
    priceMO: {
      curr: "$",
      value: "199",
      months: true,
      descr: "(Prepaid for 3 months)",
    },
    includes: [
      {
        id: "Leads per month",
        title: "Leads per month",
        text: "Up to",
        value: "500",
      },
      {
        id: "Setup fee",
        title: "Setup fee*",
        value: "Free",
      },
    ],
    feeList,
    features: [
      "Training Docs",
      "Basic cloud storage and server hosting for 1 user",
      "Limited customer support",
    ],
  },

  {
    id: "Standard",
    packageTitle: "Standard",
    packageDescr: "Suitable for medium-sized businesses.",
    priceMO: {
      curr: "$",
      value: "1,450",
      months: true,
    },
    includes: [
      {
        id: "Leads per month",
        title: "Leads per month",
        text: "Up to",
        value: "2 500",
      },
      {
        id: "Setup fee",
        title: "Setup fee*",
        value: "950",
        curr: true,
      },
      {
        id: `Integration with CRM,
        Website, Third-party
        system`,
        title: `Integration with CRM,
        Website, Third-party
        system`,
        value: "1,500",
        curr: true,
      },
      {
        id: "Migration",
        title: "Migration**",
        value: "1,000 - 5,000",
        curr: true,
      },
    ],
    feeList,
    features: [
      "Training",
      "Increased storage and server hosting for up to 5 users",
      "Priority customer support",
    ],
  },

  {
    id: "Premium",
    packageTitle: "Premium",
    packageDescr: "Suitable for larger businesses with more complex needs.",
    priceMO: {
      curr: "$",
      value: "2,950",
      months: true,
    },
    includes: [
      {
        id: "Leads per month",
        title: "Leads per month",
        text: "Up to",
        value: "10 000",
      },
      {
        id: "Setup fee",
        title: "Setup fee*",
        value: "1,950",
        curr: true,
      },
      {
        id: `Integration with CRM,
        Website, Third-party
        system`,
        title: `Integration with CRM,
        Website, Third-party
        system`,
        value: "3,000",
        curr: true,
      },
      {
        id: "Migration",
        title: "Migration**",
        value: "1,000 - 5,000",
        curr: true,
      },
    ],
    feeList,
    features: [
      "Training",
      "Advanced cloud storage and server hosting for up to 10 users",
      "Dedicated account manager during working hours",
    ],
  },

  {
    id: "Enterprise",
    packageTitle: "Enterprise",
    packageDescr: "Suitable for large businesses with extensive requirements.",
    priceMO: {
      value: "Call Us",
      months: false,
    },
    includes: [
      {
        id: "Leads per month",
        title: "Leads per month",
        value: "Unlimited",
      },
      {
        id: "Setup fee",
        title: "Setup fee*",
        value: "Call Us",
      },
      {
        id: `Integration with CRM,
        Website, Third-party
        system`,
        title: `Integration with CRM,
        Website, Third-party
        system`,
        value: "Included",
      },
      {
        id: "Migration",
        title: "Migration**",
        value: "Call Us",
      },
    ],
    feeList,
    features: [
      "Training",
      "Customized cloud platform",
      "Unlimited storage and server hosting for a large number of users",
      "Enterprise-level customer support with dedicated technical account manager and personalized service",
    ],
  },
];
