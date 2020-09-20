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
export const addToCart = (id, name, price, img, ctgr) => {
  return {
    type: actions.ADD_TO_CART,
    payload: {
      id,
      name,
      qty: 1,
      price,
      img,
      ctgr
    }
  }
}

export const deleteCart = (id) => {
  return {
    type: actions.DELETE_CART,
    payload: {
      id: id,
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

export const decreaseQty = (id) => {
  return {
    type: actions.DECREASE_QUANTITY,
    payload: {
      id: id,
    }
  }
}

export const clearCart = () => {
  return {
    type: actions.CLEAR_CART
  }
}

export const editMenu = (id, name, price, img, ctgr, category_id) => {
  return {
    type: actions.EDIT_MENU,
    payload: {
      id_menu: id,
      name: name,
      price: price,
      img: img,
      ctgr: ctgr,
      category_id: category_id,
    },
  }
}

export const searchMenu = (menu_name) => {
  return {
    type: actions.MENU_FETCH_SEARCH,
    payload: getMenuSearch(menu_name)
  };
};
