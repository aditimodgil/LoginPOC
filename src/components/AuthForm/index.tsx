import React from "react";
import { StyledFormWrapper, StyledForm } from "../helper";
import { IAuthFormProps } from "../../types";

const AuthForm = ({ submit , children }: IAuthFormProps) => (
  <StyledFormWrapper>
    <StyledForm onSubmit={submit}>{children}</StyledForm>
  </StyledFormWrapper>
);

export default AuthForm;
