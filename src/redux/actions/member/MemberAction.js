import { GetMembersByRange } from 'api/member/member-api';

//types
const MEMBER_IS_LOADING = 'MEMBER_IS_LOADING';
const MEMBER_LOADING_ERROR = 'MEMBER_LOADING_ERROR';
const MEMBER_LOADED = 'MEMBER_LOADED';

//types functions
const memberIsLoading = (bool) => {
  return {
    type: memberIsLoading,
    isLoading: bool
  };
};

const memberLoadingError = (err) => {
  return {
    type: memberLoadingError,
    errCode: err.code,
    errMessage: err.message,
    isError: true
  };
};

const memberLoaded = (data) => {
  return {
    type: memberLoaded,
    payload: data,
    loaded: true
  };
};

//actions

//get

const GET_MEMBERS_BY_RANGE = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(memberIsLoading(true));

    GetMembersByRange(pageNumber, pageSize)
      .then((response) => {
        dispatch(memberIsLoading(false));
        dispatch(memberLoaded(response.data));
      })
      .catch((err) => dispatch(memberLoadingError(err)));
  };
};

//posts

export { MEMBER_IS_LOADING, MEMBER_LOADED, MEMBER_LOADING_ERROR, GET_MEMBERS_BY_RANGE };
