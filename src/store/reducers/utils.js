import {
  TOGGLE_MOBILE_MENU,
  SELECT_SECTION,
} from 'store/actions/actionsTypes';

const initialState = {
  isOpenMobileMenu: false,
  currentSection: null,
};

const utils = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isOpenMobileMenu: !state.isOpenMobileMenu,
      }

    case SELECT_SECTION:
      return {
        ...state,
        currentSection: action.section,
      }

    default:
      return state;
  }
}

export default utils;
