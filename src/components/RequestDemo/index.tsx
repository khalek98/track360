import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";

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
  return <div></div>;
};

export default RequestDemo;
