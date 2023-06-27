import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { Fade } from "react-reveal";

import styles from "./RequestDemo.module.scss";

import RequestSvg from "./RequestDemo.svg";
import { useAppContext } from "@/context/AppContext";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkbox: boolean;
}

const RequestDemo = () => {
  const { setShowRequestDemo } = useAppContext();
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
    }, 500);
  };

  const onSubmit = (value: IForm) => {
    console.log(value);
    reset();
  };

  return (
    <>
      <div className={cn(styles.PopUpWrap, { [styles.PopUpOut]: hidePopUp })}>
        <div className={styles.PopUpInner}>
          <div className={styles.RequestWrap}>
            <h2 className={styles.RequestTitle}>
              See How <br /> <span>Track 360</span> Works
            </h2>

            <ul className={styles.RequestList}>
              <li className={styles.RequestItem}>
                <h3 className={styles.RequestItemTitle}>Experience Efficiency:</h3>
                <p className={styles.RequestItemDescr}>
                  See our platform&apos;s effectiveness firsthand.
                </p>
              </li>

              <li className={styles.RequestItem}>
                <h3 className={styles.RequestItemTitle}>Customized Demo:</h3>
                <p className={styles.RequestItemDescr}>
                  Tailored walkthrough for your business needs.
                </p>
              </li>
            </ul>

            <div className={styles.ImgWrapper}>
              <RequestSvg />
            </div>
          </div>

          <div className={cn(styles.PopUp)}>
            <div className={styles.CloseBtn} onClick={onClosePopUp}>
              <span></span>
              <span></span>
            </div>
            <p className={styles.PopUpDescr}>
              Fill out the form below and we will contact you as soon as possible to provide a demo.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
              <div className={styles.InputWrapper}>
                <input
                  tabIndex={0}
                  className={styles.Input}
                  type="text"
                  placeholder="First Name*"
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
                  placeholder="Last Name*"
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

              <div className={styles.InputWrapper}>
                <input
                  tabIndex={0}
                  className={styles.Input}
                  type="text"
                  placeholder="Phone Number"
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
                I agree to receive commercial information regarding Track 360 via email.
              </label>
              <button type="submit" className={styles.FormBtn}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={cn(styles.PopUpBG, { [styles.PopUpBGOut]: hidePopUp })}></div>
    </>
  );
};

export default RequestDemo;
