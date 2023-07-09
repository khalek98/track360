import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { Fade } from "react-reveal";

import styles from "./RequestDemo.module.scss";

import RequestSvg from "./RequestDemo.svg";
import { SendFormType } from "@/@types/ContextTypes";

import { useAppContext } from "@/context/AppContext";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkbox: boolean;
}

const RequestDemo = () => {
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
                    <div className={styles.Img}></div>
                  </div>
                </div>

                <div className={cn(styles.PopUpFormWrap)}>
                  <p className={styles.PopUpDescr}>
                    Fill out the form below and we will contact you as soon as possible to provide a
                    demo.
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
                      Send Request
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
                    <p className={styles.SendMessage}>
                      Please check your internet connection and try again.
                    </p>
                    <p onClick={onClosePopUp} className={styles.SendBackLink}>
                      Back to Page
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
