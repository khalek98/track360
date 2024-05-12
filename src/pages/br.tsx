import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Br = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    router.push("/");
    i18n.changeLanguage("pt");
  }, [router, i18n]);
};

export default Br;
