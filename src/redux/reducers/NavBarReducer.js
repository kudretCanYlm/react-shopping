import {
  TOGGLE_LEFT_NAV_BAR,
  CLOSE_LEFT_NAV_BAR,
  OPEN_LEFT_NAV_BAR
} from '../actions/NavBarActions';

let isOpen = true;

const NavBarReducer = (state = { isOpen }, action) => {
  switch (action.type) {
    case TOGGLE_LEFT_NAV_BAR:
      state.isOpen = !state.isOpen;
      return {
        isOpen: state.isOpen
      };

    case OPEN_LEFT_NAV_BAR:
      state.isOpen = true;

      return {
        isOpen: state.isOpen
      };

    case CLOSE_LEFT_NAV_BAR:
      state.isOpen = false;

      return {
        isOpen: state.isOpen
      };

    default:
      return {
        isOpen: state.isOpen
      };
  }
};

export default NavBarReducer;
