import { OPEN_NAV_BAR_TEXT_BOX, CLOSE_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';

let isOpen = true;

const TextBoxReducer = (state = { isOpen }, action) => {
  switch (action.type) {
    case OPEN_NAV_BAR_TEXT_BOX:
      state.isOpen = true;

      return {
        isOpen: state.isOpen
      };

    case CLOSE_NAV_BAR_TEXT_BOX:
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

export default TextBoxReducer;
