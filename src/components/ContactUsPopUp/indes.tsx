import React, { useEffect, useState } from "react";
import cn from "classnames";

import styles from "./ContactUsPopUp.module.scss";
import { useForm } from "react-hook-form";
import { useAppContext } from "@/context/AppContext";

interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  checkbox: boolean;
}

const ContactUsPopUp = () => {
  const { setShowContactUs } = useAppContext();
  const [hidePopUp, setHidePopUp] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onClosePopUp = () => {
    setHidePopUp(true);
    document.body.style.overflow = "auto";

    setTimeout(() => {
      setShowContactUs(false);
    }, 500);
  };

  const onSubmit = (value: IForm) => {
    console.log(value);
    reset();
  };

  return (
    <>
      <div className={styles.PopUpWrap}>
        <div className={cn(styles.PopUp, { [styles.PopUpOut]: hidePopUp })}>
          <div className={styles.CloseBtn} onClick={onClosePopUp}>
            <span></span>
            <span></span>
          </div>
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
              {errors.name && <div className={styles.InputErrorText}>{errors.name.message}</div>}
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
              {errors.email && <div className={styles.InputErrorText}>{errors.email.message}</div>}
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
        </div>
      </div>
      <div className={cn(styles.PopUpBG, { [styles.PopUpBGOut]: hidePopUp })}></div>
    </>
  );
};

export default ContactUsPopUp;
