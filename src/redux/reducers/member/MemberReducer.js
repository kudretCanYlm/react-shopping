import {
  MEMBER_IS_LOADING,
  MEMBER_LOADED,
  MEMBER_LOADING_ERROR
} from 'redux/actions/member/MemberAction';

const MemberReducer = (state = [], action) => {
  switch (action.type) {
    case MEMBER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case MEMBER_LOADING_ERROR:
      return {
        ...state,
        isError: action.isError,
        errCode: action.errCode,
        errMessage: action.errMessage
      };

    case MEMBER_LOADED:
      return {
        ...state,
        payload: action.payload,
        loaded: action.loaded
      };

    default:
      return state;
  }
};

export default MemberReducer;
