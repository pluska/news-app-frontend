export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: any; // Define el tipo de los datos del usuario registrado
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: string; // Define el tipo del mensaje de error
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: any; // Define el tipo de los datos del usuario logueado y el token
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string; // Define el tipo del mensaje de error
}

export type UserActionTypes =
  | RegisterSuccessAction
  | RegisterFailureAction
  | LoginSuccessAction
  | LoginFailureAction;
