const {
  AUTHORIZED_USER_INFORMATION_MINI_IS_LOADING,
  AUTHORIZED_USER_INFORMATION_MINI_LOADING_ERROR,
  AUTHORIZED_USER_INFORMATION_MINI_LOADED
} = require('redux/actions/user/AuthorizedUserInformationMini');

const UserReducer = (state = [], action) => {
  switch (action.type) {
    case AUTHORIZED_USER_INFORMATION_MINI_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case AUTHORIZED_USER_INFORMATION_MINI_LOADING_ERROR:
      return {
        ...state,
        isError: action.isError,
        errCode: action.errCode,
        errMessage: action.errMessage
      };

    case AUTHORIZED_USER_INFORMATION_MINI_LOADED:
      return {
        ...state,
        payload: action.payload,
        loaded: action.loaded
      };

    default:
      return state;
  }
};

export default UserReducer;
