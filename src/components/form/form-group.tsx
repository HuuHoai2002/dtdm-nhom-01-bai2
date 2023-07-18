"use client";

import classNames from "classnames";
import React from "react";

interface FormGroupProps {
  children: React.ReactNode;
  hasError?: boolean;
  errorMessages?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  children,
  hasError,
  errorMessages,
}) => {
  return (
    <div>
      {children}
      {hasError && (
        <span className={classNames("text-xs lg:text-sm text-red-500")}>
          {errorMessages}
        </span>
      )}
    </div>
  );
};

export default FormGroup;

FormGroup.displayName = "FormGroup";
