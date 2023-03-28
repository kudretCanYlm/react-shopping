import { GetCompaniesByRange } from 'api/company/company-api';

//types
const COMPANY_IS_LOADING = 'COMPANY_IS_LOADING';
const COMPANY_LOADING_ERROR = 'COMPANY_LOADING_ERROR';
const COMPANY_LOADED = 'COMPANY_LOADED';

//types functions
const companyIsLoading = (bool) => {
  return {
    type: COMPANY_IS_LOADING,
    isLoading: bool
  };
};

const companyLoadingError = (err) => {
  return {
    type: COMPANY_LOADING_ERROR,
    errCode: err.code,
    errMessage: err.message,
    isError: true
  };
};

const companyLoaded = (data) => {
  return {
    type: COMPANY_LOADED,
    payload: data,
    loaded: true
  };
};

//actions

//get
const GET_COMPANIES_BY_RANGE = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(companyIsLoading(true));

    GetCompaniesByRange(pageNumber, pageSize)
      .then((response) => {
        dispatch(companyIsLoading(false));

        dispatch(companyLoaded(response.data));
      })
      .catch((err) => {
        dispatch(companyIsLoading(false));

        dispatch(companyLoadingError(err));
      });
  };
};

export { COMPANY_IS_LOADING, COMPANY_LOADING_ERROR, COMPANY_LOADED, GET_COMPANIES_BY_RANGE };
