import * as actions from "../actions/actionTypes";

const initialState = {
  data: {},
  isAdmin: false,
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_LOGIN + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.AUTH_LOGIN + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actions.AUTH_LOGIN + actions.FULFILLED:
      // console.log(payload.data)
      let admin = null;
      let login = null;
      if (payload.data.isSuccess) {
        if (payload.data.data.level_id === 1) {
          admin = true;
          login = true;
        } else {
          admin = false;
          login = true;
        }
      } else {
        admin = false;
        login = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };
    case actions.AUTH_LOGOUT:
      return {
        data: {},
        isAdmin: false,
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };
    default:
      return state;
  }
};

export default authReducer;