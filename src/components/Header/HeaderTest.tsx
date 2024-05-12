import React from "react";
import { useTranslation } from "next-i18next";

const HeaderTest = () => {
  // @ts-ignore
  const trnslation = useTranslation(["buttons", "footer", "home"]);

  return <div>Header</div>;
};

export default HeaderTest;
