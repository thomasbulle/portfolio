import {
  TOGGLE_MOBILE_MENU,
  SELECT_SECTION,
} from './actionsTypes';

/**
 * To open or close the mobile menu
 * 
 * @param {Boolean} isOpen - the status of the mobile menu
 */
export const toggleMobileMenu = () => ({
  type: TOGGLE_MOBILE_MENU,
});


/**
 * To change the selected section in the menu
 * 
 * @param {String} section - the selected section
 */
export const selectSection = section => ({
  type: SELECT_SECTION,
  section,
});
