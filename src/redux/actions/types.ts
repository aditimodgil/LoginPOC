

//action types
export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";

//interfaces
export interface AuthStartAction {
    type: typeof AUTH_START
    
  }
  
export interface AuthSuccessAction {
    type: typeof AUTH_SUCCESS
    idToken: string | null | undefined,
    userId : string | null | undefined
  }

export interface AuthFailAction {
      type : typeof AUTH_FAIL,
      error : string | null | undefined
  }

export interface AuthState{
  token: string | null | undefined,
  userId: string | null | undefined,
  error: string | null | undefined,
  loading: boolean
}
export type AuthActionTypes = AuthStartAction | AuthSuccessAction | AuthFailAction