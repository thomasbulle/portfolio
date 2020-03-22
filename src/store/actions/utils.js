import { TOGGLE_MOBILE_MENU } from './actionsTypes';

/**
 * To open or close the mobile menu
 * 
 * @param {Boolean} isOpen - the status of the mobile menu
 */
export const toggleMobileMenu = () => ({
  type: TOGGLE_MOBILE_MENU,
});
