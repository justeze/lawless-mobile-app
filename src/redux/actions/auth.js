import * as actions from './actionTypes';
import { authLogin } from "../../utils/reqData";

export const authLoginCreator = (name, password) => {
    return {
      type: actions.AUTH_LOGIN,
      payload: authLogin(name, password),
    }
  }