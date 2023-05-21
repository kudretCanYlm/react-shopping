import {
  MEMBER_CLEAR,
  MEMBER_IS_LOADING,
  MEMBER_LOADED,
  MEMBER_LOADING_ERROR,
  MEMBER_SET_END,
  MEMBER_SET_PAGE
} from 'redux/actions/member/MemberAction';

const MemberReducer = (state = { payload: [], pageCount: 1, isEnd: false }, action) => {
  switch (action.type) {
    case MEMBER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        isEnd: action.isEnd
      };

    case MEMBER_LOADING_ERROR:
      return {
        ...state,
        isError: action.isError,
        errCode: action.errCode,
        errMessage: action.errMessage,
        isEnd: action.isEnd
      };

    case MEMBER_LOADED:
      return {
        ...state,
        payload: [...state.payload, ...action.payload],
        loaded: action.loaded,
        isEnd: action.isEnd
      };
    case MEMBER_SET_PAGE:
      return {
        ...state,
        pageCount: state.pageCount + 1
      };
    case MEMBER_CLEAR:
      return {
        isError: false,
        isLoading: false,
        payload: [],
        pageCount: 1,
        isEnd: false
      };

    default:
      return state;
  }
};

export default MemberReducer;
