import React from "react";
import { ITextFieldProps } from "../../types";
import { StyledInput } from "../helper";

const TextField = React.forwardRef(
  ({ type, placeholder, name , value}: ITextFieldProps, ref:((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined ) => (
    <StyledInput type={type} placeholder={placeholder} name={name} value={value} ref={ref} />
  )
);

export default TextField;
