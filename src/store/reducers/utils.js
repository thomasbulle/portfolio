import { TOGGLE_MOBILE_MENU } from 'store/actions/actionsTypes';

const initialState = {
  isOpenMobileMenu: false,
};

const utils = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isOpenMobileMenu: !state.isOpenMobileMenu,
      }

    default:
      return state;
  }
}

export default utils;
