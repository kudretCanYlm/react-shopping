const { GetAuthorizedUserInformationMini } = require('api/user/user-api');

//types
const AUTHORIZED_USER_INFORMATION_MINI_IS_LOADING = 'AUTHORIZED_USER_INFORMATION_MINI_IS_LOADING';
const AUTHORIZED_USER_INFORMATION_MINI_LOADING_ERROR =
  'AUTHORIZED_USER_INFORMATION_MINI_LOADING_ERROR';
const AUTHORIZED_USER_INFORMATION_MINI_LOADED = 'AUTHORIZED_USER_INFORMATION_MINI_LOADED';

//types functions
const authorizedUserInformationMiniIsLoading = (bool) => {
  return {
    type: AUTHORIZED_USER_INFORMATION_MINI_IS_LOADING,
    isLoading: bool
  };
};

const authorizedUserInformationMiniIsLoadingError = (err) => {
  return {
    type: AUTHORIZED_USER_INFORMATION_MINI_LOADING_ERROR,
    errCode: err.response.status,
    errMessage: err.message,
    isError: true
  };
};

const authorizedUserInformationMiniIsLoaded = (data) => {
  return {
    type: AUTHORIZED_USER_INFORMATION_MINI_LOADED,
    payload: data,
    loaded: true
  };
};

//actions
const GET_AUTHORIZED_USER_INFORMATION_MINI = () => {
  return (dispatch) => {
    dispatch(authorizedUserInformationMiniIsLoading(true));

    GetAuthorizedUserInformationMini()
      .then((response) => {
        dispatch(authorizedUserInformationMiniIsLoaded(response.data));
        dispatch(authorizedUserInformationMiniIsLoading(false));
      })
      .catch((err) => {
        dispatch(authorizedUserInformationMiniIsLoading(false));
        dispatch(authorizedUserInformationMiniIsLoadingError(err));
      });
  };
};

export {
  AUTHORIZED_USER_INFORMATION_MINI_IS_LOADING,
  AUTHORIZED_USER_INFORMATION_MINI_LOADING_ERROR,
  AUTHORIZED_USER_INFORMATION_MINI_LOADED,
  GET_AUTHORIZED_USER_INFORMATION_MINI
};
