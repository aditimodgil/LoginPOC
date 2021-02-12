import React,{useEffect, useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import * as actions from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import { ILoginForm,LoginProps } from "../../types";
import { useForm } from "react-hook-form";
//import * as yup from "yup";
//import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "../../components/TextField";
import AuthForm from "../../components/AuthForm";
import Button from "../../components/Button";
import { StyledError } from "../../components/helper";


const StyledLink = styled(Link)`
  color: #f7797d;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
`;

const Login: React.FC<LoginProps>  = ({uid,error,loading}) => {
 const history = useHistory();
 const dispatch = useDispatch();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const { register, handleSubmit, errors } = useForm<ILoginForm>();


  const onSubmit = (data: ILoginForm) => {
    setEmail(data.email);
    setPassword(data.password);
    dispatch(actions.authUser(data.email,data.password,false));
  };
  

  useEffect(()=>{
   if(uid){history.push("/")}
  },[uid]);

  return (
    <AuthForm submit={handleSubmit(onSubmit)}>
    {error && <StyledError>{error}</StyledError>}
      <h2>Login Form</h2>
      <label htmlFor="name">Email</label>
      <TextField type="text" placeholder="email" name="email"  ref={register} />
      {errors?.email && <StyledError>{errors?.email.message}</StyledError>}
      <label htmlFor="name">Password</label>
      <TextField
        type="password"
        placeholder="password"
        name="password"
        ref={register}
      />
      {errors?.password && <StyledError>{errors?.password.message}</StyledError>}
      <Button isdisabled={loading}>Login</Button>
      <StyledLink to="/register">new user? sign up</StyledLink>
    </AuthForm>
  );
};

export default Login;
