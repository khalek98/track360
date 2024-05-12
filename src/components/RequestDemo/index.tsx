import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { Trans, useTranslation } from "next-i18next";

import styles from "./RequestDemo.module.scss";

import { useAppContext } from "@/context/AppContext";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkbox: boolean;
}

const RequestDemo = () => {
  const { t } = useTranslation("forms");
  const { setShowRequestDemo, sendForm, setSendForm } = useAppContext();
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
      setShowRequestDemo(false);
      setSendForm("hold");
    }, 500);
  };

  const onSubmit = (value: IForm) => {
    setValue("firstName", value.firstName);
    setValue("lastName", value.lastName);
    setValue("email", value.email);

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
      <div className={cn(styles.PopUp, { [styles.PopUpOut]: hidePopUp })}>
        <div className={styles.PopUpWrap}>
          <div
            className={cn(styles.PopUpContent, { [styles.PopUpContentSend]: sendForm !== "hold" })}
          >
            <div className={styles.CloseBtn} onClick={onClosePopUp}>
              <span></span>
              <span></span>
            </div>
            {sendForm === "hold" && (
              <>
                <div className={styles.RequestWrap}>
                  <h2 className={styles.RequestTitle}>
                    <Trans
                      key={"requestDemoTitle"}
                      defaults={t("requestDemoTitle", { ns: "forms" })}
                      components={{ br: <br />, span: <span /> }}
                    />
                  </h2>

                  <ul className={styles.RequestList}>
                    <li className={styles.RequestItem}>
                      <h3 className={styles.RequestItemTitle}>
                        {t("Experience Efficiency:", { ns: "forms" })}
                      </h3>
                      <p className={styles.RequestItemDescr}>
                        {t("See our platform's effectiveness firsthand.", { ns: "forms" })}
                      </p>
                    </li>

                    <li className={styles.RequestItem}>
                      <h3 className={styles.RequestItemTitle}>
                        {t("Customized Demo:", { ns: "forms" })}
                      </h3>
                      <p className={styles.RequestItemDescr}>
                        {t("Tailored walkthrough for your business needs.", { ns: "forms" })}
                      </p>
                    </li>
                  </ul>

                  <div className={styles.ImgWrapper}>
                    <div className={styles.Img}></div>
                  </div>
                </div>

                <div className={cn(styles.PopUpFormWrap)}>
                  <p className={styles.PopUpDescr}>
                    {t(
                      "Fill out the form below and we will contact you as soon as possible to provide a demo.",
                    )}
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                    <div className={styles.InputWrapper}>
                      <input
                        tabIndex={0}
                        className={styles.Input}
                        type="text"
                        placeholder={t("First Name", { ns: "forms" }) + "*"}
                        {...register("firstName", {
                          required: { value: true, message: "This field is required" },
                          minLength: { value: 2, message: "Minimum 2 characters" },
                        })}
                      />
                      {errors.firstName && (
                        <div className={styles.InputErrorText}>{errors.firstName.message}</div>
                      )}
                    </div>

                    <div className={styles.InputWrapper}>
                      <input
                        tabIndex={0}
                        className={styles.Input}
                        type="text"
                        placeholder={t("Last Name", { ns: "forms" }) + "*"}
                        {...register("lastName", {
                          required: { value: true, message: "This field is required" },
                          minLength: { value: 2, message: "Minimum 2 characters" },
                        })}
                      />
                      {errors.lastName && (
                        <div className={styles.InputErrorText}>{errors.lastName.message}</div>
                      )}
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

                    <label className={styles.CheckBox}>
                      <input
                        tabIndex={0}
                        className={styles.CheckBox}
                        type="checkbox"
                        {...register("checkbox")}
                      />
                      {t("agreeLable", { ns: "forms" })}
                    </label>
                    <button type="submit" className={styles.FormBtn}>
                      {t("Send Request", { ns: "buttons" })}
                    </button>
                  </form>
                </div>
              </>
            )}

            {sendForm !== "hold" && (
              <>
                {sendForm === "success" ? (
                  <div className={styles.SendWrap}>
                    <div className={styles.SendImg}></div>
                    <h2 className={styles.SendTitle}>
                      {t("Thank you for sending!", { ns: "forms" })}
                    </h2>
                    <p className={styles.SendMessage}>
                      {t("We will get in touch with you shortly.", { ns: "forms" })}
                    </p>
                    <p onClick={onClosePopUp} className={styles.SendBackLink}>
                      {t("Back to Page", { ns: "buttons" })}
                    </p>
                  </div>
                ) : (
                  <div className={styles.SendWrap}>
                    <h2 className={styles.SendTitle}>
                      {t("Something went wrong...", { ns: "forms" })}
                    </h2>
                    <p className={styles.SendMessage}>{t("Please try again.", { ns: "forms" })}</p>
                    <p onClick={() => setSendForm("hold")} className={styles.SendBackLink}>
                      {t("Back to form", { ns: "buttons" })}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className={cn(styles.PopUpBG, { [styles.PopUpBGOut]: hidePopUp })}></div>
    </>
  );
};

export default RequestDemo;
