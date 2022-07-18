import {
    TOGGLE_LEFT_NAV_BAR,
    CLOSE_LEFT_NAV_BAR,
    OPEN_LEFT_NAV_BAR
} from "../actions/NavBarActions"

let isOpen = true;

const NavBarReducer = (state = isOpen, action) => {
    switch (action.type) {
        case TOGGLE_LEFT_NAV_BAR:
            state = !state;
            return {
                ...state
            }

        case OPEN_LEFT_NAV_BAR:
            state = true;

            return {
                ...state
            }

        case CLOSE_LEFT_NAV_BAR:
            state = false;

            return {
                ...state
            }

        default:
            return {
                isOpen: state
            }
    }
}

export default NavBarReducer;