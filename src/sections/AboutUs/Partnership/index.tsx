// @ts-nocheck
import React from "react";
import { useForm } from "react-hook-form";

import styles from "./Partnership.module.scss";

import MailSVG from "./mail.svg";
import LocationSVG from "./location.svg";
import { useAppContext } from "@/context/AppContext";
import { Trans, useTranslation } from "next-i18next";

interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  checkbox: boolean;
  phone: string;
}

const Partnership = () => {
  const { setSendForm, setShowRequestDemo } = useAppContext();
  const { t } = useTranslation();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    setValue,
  } = useForm<IForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = (value: IForm) => {
    setValue("name", value.name);
    setValue("email", value.email);
    setValue("message", value.message);

    fetch("/mail.php", {
      method: "POST",
      body: JSON.stringify(value),
    }).then((res) => {
      setShowRequestDemo(true);

      if (res.ok) {
        setSendForm("success");
        reset();
      } else {
        setSendForm("error");
      }
    });
  };

  return (
    <section id="partnership" className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h2 className={styles.Title}>{t("Partnerships", { ns: "about" })}</h2>
          <p className={styles.Text}>
            <Trans
              key={"partnershipText1"}
              defaults={t("partnershipText1", { ns: "about" })}
              components={{ span: <span /> }}
            />
          </p>

          <p className={styles.Text}>{t("partnershipText2", { ns: "about" })}</p>

          <ul className={styles.ContactsWrap}>
            <li className={styles.ContactItem}>
              <MailSVG className={styles.ContactSvg} />
              <div className={styles.ContactItemWrap}>
                <div className={styles.ContactTitle}>{t("mailTitle", { ns: "footer" })}</div>
                <a className={styles.Contact} href="mailto:sales@proline.ltd">
                  sales@proline.ltd
                </a>
              </div>
            </li>

            <li className={styles.ContactItem}>
              <LocationSVG className={styles.ContactSvg} />

              <div className={styles.ContactItemWrap}>
                <div className={styles.ContactTitle}>{t("officeLocation", { ns: "footer" })}</div>
                <address className={styles.Contact}>Levi Eshkol 68, Kiryat Ono, Israel</address>
              </div>
            </li>
          </ul>

          <div className={styles.ContactForm}>
            <div className={styles.BluredBG}></div>
            <div className={styles.DoashedBG}></div>
            <h3 className={styles.ContactFormTitle}>{t("Send us a message", { ns: "forms" })}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
              <div className={styles.InputWrapper}>
                <input
                  tabIndex={0}
                  className={styles.Input}
                  type="text"
                  placeholder={t("Name", { ns: "forms" }) + "*"}
                  {...register("name", {
                    required: { value: true, message: "This field is required" },
                    minLength: { value: 2, message: "Minimum 2 characters" },
                  })}
                />
                {errors.name && <div className={styles.InputErrorText}>{errors.name.message}</div>}
              </div>

              <div className={styles.InputWrapper}>
                <input
                  tabIndex={0}
                  className={styles.Input}
                  type="email"
                  placeholder={t("Email", { ns: "forms" }) + "*"}
                  {...register("email", {
                    required: { value: true, message: "This field is required" },
                    pattern: { value: /^\S+@\S+$/, message: "Invalid e-mail format" },
                  })}
                />
                {errors.email && (
                  <div className={styles.InputErrorText}>{errors.email.message}</div>
                )}
              </div>

              <div className={styles.InputWrapper}>
                <input
                  tabIndex={0}
                  className={styles.Input}
                  type="text"
                  placeholder={t("Phone Number", { ns: "forms" })}
                  {...register("phone")}
                />
              </div>

              <input
                tabIndex={0}
                className={styles.Input}
                type="text"
                placeholder={t("Subject", { ns: "forms" })}
                {...register("subject")}
              />

              <div className={styles.InputWrapper}>
                <textarea
                  className={styles.Textarea}
                  placeholder={t("Message", { ns: "forms" }) + "*"}
                  {...register("message", {
                    required: { value: true, message: "This field is required" },
                    minLength: { value: 5, message: "Minimum 5 characters" },
                  })}
                />
                {errors.message && (
                  <div className={styles.InputErrorText}>{errors.message.message}</div>
                )}
              </div>
              <label className={styles.CheckBox}>
                <input
                  tabIndex={0}
                  className={styles.CheckBox}
                  type="checkbox"
                  {...register("checkbox")}
                />
                {t("forms:agreeLable")}
              </label>
              <button type="submit" className={styles.FormBtn}>
                {t("Send", { ns: "buttons" })}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
