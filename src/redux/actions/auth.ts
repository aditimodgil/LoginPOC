import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AuthActionTypes  } from "./types";
import { auth } from "../../firebase";
import { ThunkAction} from 'redux-thunk';
import {RootState} from "../store";
import { Action } from 'redux';

export const authStart = (): AuthActionTypes => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = (token :string | null | undefined , userId : string | null | undefined) : AuthActionTypes => {
  return {
    type: AUTH_SUCCESS,
    idToken: token,
    userId
  };
};

export const authFail = (error : string | null | undefined) : AuthActionTypes => {
  return {
    type: AUTH_FAIL,
    error
  };
};

export const authUser = (email : string, password : string, isSignUp : boolean) : ThunkAction<void, RootState, unknown, Action<string>> => {
  return dispatch => {
    let token, userid, errMessage;
    localStorage.clear();
    
    dispatch(authStart());
    if(isSignUp){
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        token = res.user?.refreshToken;
        userid = res.user?.uid;
        if(token){ localStorage.setItem('token', token) }
        dispatch(authSuccess(token, userid));
      })
      .catch(err => {
        console.log(err);
        errMessage = err.message;
        dispatch(authFail(errMessage));
      }); }else{
        auth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res);
          token = res.user?.refreshToken;
          userid = res.user?.uid;
          if(token){ localStorage.setItem('token', token) }
          dispatch(authSuccess(token, userid));
        })
        .catch(err => {
          console.log(err);
          errMessage = err.message;
          dispatch(authFail(errMessage));
        });
      }
  };
};
