import CustomizedSVG from "@/assets/icons/choose/customized.svg";
import InnovativeSVG from "@/assets/icons/choose/Innovative.svg";
import DedicatedSVG from "@/assets/icons/choose/dedicated.svg";
import AffordableSVG from "@/assets/icons/choose/affordable.svg";
import UxSvg from "@/assets/icons/choose/ux.svg";

type ReasonsArrType = {
  title: string;
  descr: string;
  imgSVG: any;
};

export const reasonsArr: ReasonsArrType[] = [
  {
    title: "Customized solutions",
    descr: "Each client can customize their platform to meet any specific need or request.",
    imgSVG: CustomizedSVG,
  },
  {
    title: "Innovative features",
    descr:
      "Track 360 includes advanced features to go deeper and reveal more regarding your affiliate program’s performance to optimize your campaigns for maximum conversion.",
    imgSVG: InnovativeSVG,
  },
  {
    title: "Dedicated support",
    descr:
      "Our team provides top-notch customer service and is available and accessible for any help you may need.",
    imgSVG: DedicatedSVG,
  },
  {
    title: "Affordable pricing",
    descr:
      "We offer competitive pricing plans that are designed to fit businesses of all sizes and budgets.",
    imgSVG: AffordableSVG,
  },
  {
    title: "UX",
    descr:
      "Track 360 is unrivaled in design and functionality, with an intuitive flow that any user can easily navigate.",
    imgSVG: UxSvg,
  },
];
