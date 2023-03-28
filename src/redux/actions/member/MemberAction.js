import { GetMembersByRange } from 'api/member/member-api';

//types
const MEMBER_IS_LOADING = 'MEMBER_IS_LOADING';
const MEMBER_LOADING_ERROR = 'MEMBER_LOADING_ERROR';
const MEMBER_LOADED = 'MEMBER_LOADED';
const MEMBER_CLEAR = "MEMBER_CLEAR";
const MEMBER_SET_PAGE = "MEMBER_SET_PAGE";
const MEMBER_SET_END = "MEMBER_SET_END";


//types functions
const memberIsLoading = (bool) => {
  return {
    type: MEMBER_IS_LOADING,
    isLoading: bool
  };
};

const memberLoadingError = (err) => {
  return {
    type: MEMBER_LOADING_ERROR,
    errCode: err.code,
    errMessage: err.message,
    isError: true
  };
};

const memberLoaded = (data, isEnd) => {
  return {
    type: MEMBER_LOADED,
    payload: data,
    loaded: true,
    isEnd
  };
};

const memberClear = () => {
  return {
    type: MEMBER_CLEAR
  };
};

const memberSetPage = () => {
  return {
    type: MEMBER_SET_PAGE
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

        if ([...response.data].length == 0)
          dispatch(memberLoaded(response.data, true));
        else {
          dispatch(memberLoaded(response.data, false));
          dispatch(memberSetPage());
        }

      })
      .catch((err) => {
        dispatch(memberIsLoading(false));
        dispatch(memberLoadingError(err));
      });
  };
};

//posts

export {
  MEMBER_IS_LOADING,
  MEMBER_LOADED,
  MEMBER_LOADING_ERROR,
  GET_MEMBERS_BY_RANGE,
  MEMBER_CLEAR,
  MEMBER_SET_PAGE,
  MEMBER_SET_END,
};
