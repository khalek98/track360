import { FC, useState, useEffect } from "react";
import cn from "classnames";
import { NotificationProps } from "./Notification.props";

import styles from "./Notification.module.scss";
import { useAppContext } from "@/context/AppContext";

const Notification: FC<NotificationProps> = ({
  message,
  autoCloseTimeout = 5000,
  status = "hold",
}) => {
  // const [show, setShow] = useState<boolean>(true);
  const { sendForm, setSendForm } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSendForm("hold");
    }, autoCloseTimeout);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setSendForm("hold");
  };

  return (
    <>
      {sendForm && (
        <div
          className={cn(
            styles.Notification,
            { [styles.success]: status === "success" },
            { [styles.error]: status === "error" },
          )}
        >
          <p className={styles.Message}>{message}</p>
          <button
            className={cn(
              styles.Button,
              { [styles.success]: status === "success" },
              { [styles.error]: status === "error" },
            )}
            onClick={handleClose}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      )}
    </>
  );
};

export default Notification;
