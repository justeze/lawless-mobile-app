import * as actions from '../actions/actionTypes';

const initialState = {
  menus: [],
  carts: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
}

const menuReducer = (state = initialState, { type, payload }) => {
  let newCart = [...state.carts]
  // console.log(state.carts)
  switch (type) {
    case actions.MENU_FETCH + actions.PENDING:
      return {
        ...state,
        isPending: true,
      }
    case actions.MENU_FETCH + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        isPending: false,
        error: payload,
      }
    case actions.MENU_FETCH + actions.FULFILLED:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        menus: payload.data.data,
      }
    case actions.MENU_FETCH_SEARCH + actions.PENDING:
      return {
        ...state,
        isPending: true,
      }
    case actions.MENU_FETCH_SEARCH + actions.REJECTED:
      return {
        ...state,
        isRejected: true,
        isPending: false,
        error: payload,
      }
    case actions.MENU_FETCH_SEARCH + actions.FULFILLED:
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        menus: payload.data.data,
      }
    case actions.ADD_TO_CART:
      const index = state.carts.findIndex((item) => {
        return payload.id === item.id
      });
      // console.log(state.carts)
      if (index >= 0) {
        state.carts.splice(index, 1);
        return {
          ...state,
          carts: state.carts
        }
      } else {
        return {
          ...state,
          carts: state.carts.concat(payload)
        }
      }
      case actions.DELETE_CART:
      const arrCart = state.carts.filter((item) => {
        return item.id !== payload.id;
      });
      return {
        ...state,
        carts: arrCart,
      };
    case actions.INCREASE_QUANTITY:
      const indexIncQty = state.carts.findIndex((item) => {
        return item.id === payload.id;
      })

      newCart[indexIncQty] = {
        ...newCart[indexIncQty],
        qty: state.carts[indexIncQty].qty + 1,
      }

      return {
        ...state,
        carts: newCart
      }
    case actions.DECREASE_QUANTITY:
      const indexDecQty = state.carts.findIndex((item) => {
        return payload.id === item.id
      })
      if (state.carts[indexDecQty].qty > 1) {
        let arrData = [...state.carts];
        arrData[indexDecQty] = {
          ...arrData[indexDecQty],
          qty: state.carts[indexDecQty].qty - 1,
        };
        return {
          ...state,
          carts: arrData,
        };
      } else {
        return {
          ...state,
        }
      }
    case actions.CLEAR_CART:
      return {
        ...state,
        carts: []
      }

    default:
      return state
  }
}

export default menuReducer;