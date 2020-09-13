import * as actions from './actionTypes';
import { getMenu } from "../../utils/reqData";
import { getMenuSearch } from "../../utils/reqData";




export const requestMenuCreator = () => {
  // console.log('action')
  return {
    type: actions.MENU_FETCH,
    payload: getMenu(),
  };
};
export const addToCart = (id, name, price, img) => {
  return {
      type: actions.ADD_TO_CART,
      payload: {
          id,
          name,
          qty: 1,
          price,
          img,
      }
  }
}

export const increaseQty = (id) => {
  return {
      type: actions.INCREASE_QUANTITY,
      payload: {
          id: id,
      }
  }
}

export const decreaseQty= (id) => {
  return {
      type: actions.DECREASE_QUANTITY,
      payload: {
          id: id,
      }
  }
}

export const clearCart= () => {
  return {
    type: actions.CLEAR_CART
  }
}

export const searchMenu = (menu_name) => {
  return {
    type: actions.MENU_FETCH_SEARCH,
    payload: getMenuSearch(menu_name)
  };
};
