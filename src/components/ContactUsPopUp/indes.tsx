import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./ContactUsPopUp.module.scss";
import { useAppContext } from "@/context/AppContext";

interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  checkbox: boolean;
}

const ContactUsPopUp = () => {
  const { t } = useTranslation("forms");
  const { setShowContactUs, sendForm, setSendForm } = useAppContext();
  const [hidePopUp, setHidePopUp] = useState<boolean>(false);

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onClosePopUp();
      }
    });

    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          onClosePopUp();
        }
      });
    };
  });

  const onClosePopUp = () => {
    setHidePopUp(true);
    document.body.style.overflow = "auto";

    setTimeout(() => {
      setShowContactUs(false);
      setSendForm("hold");
    }, 500);
  };

  const onSubmit = (value: IForm) => {
    setValue("name", value.name);
    setValue("email", value.email);
    setValue("message", value.message);

    fetch("/mail.php", {
      method: "POST",
      body: JSON.stringify(value),
    }).then((res) => {
      if (res.ok) {
        setSendForm("success");
        reset();
      } else {
        setSendForm("error");
      }
    });
  };

  return (
    <>
      <div className={styles.PopUpWrap}>
        <div
          className={cn(
            styles.PopUp,
            { [styles.PopUpOut]: hidePopUp },
            { [styles.PopUpSend]: sendForm !== "hold" },
          )}
        >
          <div className={styles.CloseBtn} onClick={onClosePopUp}>
            <span></span>
            <span></span>
          </div>
          {sendForm === "hold" && (
            <>
              <h2 className={styles.PopUpTitle}>{t("Contact us", { ns: "forms" })}</h2>
              <p className={styles.PopUpDescr}>{t("contactUsDescr")}</p>

              <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                <div className={styles.InputWrapper}>
                  <input
                    tabIndex={0}
                    className={styles.Input}
                    type="text"
                    placeholder={t("Name") + "*"}
                    {...register("name", {
                      required: { value: true, message: "This field is required" },
                      minLength: { value: 2, message: "Minimum 2 characters" },
                    })}
                  />
                  {errors.name && (
                    <div className={styles.InputErrorText}>{errors.name.message}</div>
                  )}
                </div>

                <div className={styles.InputWrapper}>
                  <input
                    tabIndex={0}
                    className={styles.Input}
                    type="email"
                    placeholder={t("Email") + "*"}
                    {...register("email", {
                      required: { value: true, message: "This field is required" },
                      pattern: { value: /^\S+@\S+$/, message: "Invalid e-mail format" },
                    })}
                  />
                  {errors.email && (
                    <div className={styles.InputErrorText}>{errors.email.message}</div>
                  )}
                </div>

                <input
                  tabIndex={0}
                  className={styles.Input}
                  type="text"
                  placeholder={t("Subject")}
                  {...register("subject")}
                />

                <div className={styles.InputWrapper}>
                  <textarea
                    className={styles.Textarea}
                    placeholder={t("Message") + "*"}
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
                  {t("agreeLable")}
                </label>
                <button type="submit" className={styles.FormBtn}>
                  {t("send", { ns: "buttons" })}
                </button>
              </form>
            </>
          )}

          {sendForm !== "hold" && (
            <>
              {sendForm === "success" ? (
                <div className={styles.SendWrap}>
                  <div className={styles.SendImg}></div>
                  <h2 className={styles.SendTitle}>{t("Thank you for sending!")}</h2>
                  <p className={styles.SendMessage}>
                    {t("We will get in touch with you shortly.")}
                  </p>
                  <p onClick={onClosePopUp} className={styles.SendBackLink}>
                    {t("Back to Page", { ns: "buttons" })}
                  </p>
                </div>
              ) : (
                <div className={styles.SendWrap}>
                  <h2 className={styles.SendTitle}>{t("Something went wrong...")}</h2>
                  <p className={styles.SendMessage}>{t("Please try again.")}</p>
                  <p onClick={() => setSendForm("hold")} className={styles.SendBackLink}>
                    {t("Back to form", { ns: "buttons" })}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className={cn(styles.PopUpBG, { [styles.PopUpBGOut]: hidePopUp })}></div>
    </>
  );
};

export default ContactUsPopUp;
