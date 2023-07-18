"use client";

import useBoolean from "@/hooks/use-boolean";
import React from "react";
import EyeOffIcon from "../icons/EyeOffIcon";
import EyeOnIcon from "../icons/EyeOnIcon";
import Input from "./input";

const InputPassword = React.forwardRef<HTMLInputElement>((props, ref) => {
  const { value, toggle } = useBoolean(false);

  return (
    <Input
      ref={ref}
      {...props}
      type={value ? "text" : "password"}
      appendIcon={value ? <EyeOffIcon /> : <EyeOnIcon />}
      appendIconClick={toggle}
    />
  );
});

export default InputPassword;

InputPassword.displayName = "InputPassword";
