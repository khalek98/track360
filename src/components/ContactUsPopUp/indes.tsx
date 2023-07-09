import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

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
              <h2 className={styles.PopUpTitle}>Contact us</h2>
              <p className={styles.PopUpDescr}>
                Questions? Suggestions? We would love to hear from you. Don’t hesitate to reach out.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                <div className={styles.InputWrapper}>
                  <input
                    tabIndex={0}
                    className={styles.Input}
                    type="text"
                    placeholder="Name*"
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
                    placeholder="Email*"
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
                  placeholder="Subject"
                  {...register("subject")}
                />

                <div className={styles.InputWrapper}>
                  <textarea
                    className={styles.Textarea}
                    placeholder="Message*"
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
                  I agree to receive commercial information regarding Track 360 via email.
                </label>
                <button type="submit" className={styles.FormBtn}>
                  Send
                </button>
              </form>
            </>
          )}

          {sendForm !== "hold" && (
            <>
              {sendForm === "success" ? (
                <div className={styles.SendWrap}>
                  <div className={styles.SendImg}></div>
                  <h2 className={styles.SendTitle}>Thank you for sending!</h2>
                  <p className={styles.SendMessage}>We will get in touch with you shortly.</p>
                  <p onClick={onClosePopUp} className={styles.SendBackLink}>
                    Back to Page
                  </p>
                </div>
              ) : (
                <div className={styles.SendWrap}>
                  {/* <div className={styles.SendImg}></div> */}
                  <h2 className={styles.SendTitle}>Something went wrong...</h2>
                  <p className={styles.SendMessage}>Please try again.</p>
                  <p onClick={() => setSendForm("hold")} className={styles.SendBackLink}>
                    Back to form
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
