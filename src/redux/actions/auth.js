import * as actions from './actionTypes';
import { authLogin, authRegister } from "../../utils/reqData";

export const authRegisterCreator = (email, name, password) => {
  return {
    type: actions.AUTH_LOGIN,
    payload: authRegister(email, name, password),
  }
}

export const authLoginCreator = (name, password) => {
  return {
    type: actions.AUTH_LOGIN,
    payload: authLogin(name, password),
  }
}

export const LoggedOut = () => {
  return {
    type: actions.AUTH_LOGOUT,
  };
};