export interface ITextFieldProps {
  type: string;
  placeholder: string;
  name: string;
  value?:string;
}

export interface IButtonProps {
  isdisabled: boolean;
  children: any;
}

export interface IAuthFormProps{
  submit : () => void;
  children : any;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface LoginProps {
  uid : string | null | undefined,
  error : string | null | undefined,
  loading : boolean
}

export interface IRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface RegisterProps {
  uid : string | null | undefined,
  error : string | null | undefined,
  loading : boolean
}

