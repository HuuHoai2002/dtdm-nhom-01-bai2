"use client";

import useBoolean from "@/hooks/use-boolean";
import React from "react";
import Input from "./input";

const InputPassword = React.forwardRef<HTMLInputElement>((props, ref) => {
  const { value, toggle } = useBoolean(false);

  return (
    <Input
      ref={ref}
      {...props}
      type={value ? "text" : "password"}
      appendIconClick={toggle}
    />
  );
});

export default InputPassword;

InputPassword.displayName = "InputPassword";
