import { GetCompanyWorkersByRange } from 'api/company/company-api';

//types
const COMPANY_WORKER_IS_LOADING = 'COMPANY_WORKER_IS_LOADING';
const COMPANY_WORKER_LOADING_ERROR = 'COMPANY_WORKER_LOADING_ERROR';
const COMPANY_WORKER_LOADED = 'COMPANY_WORKER_LOADED';

//types functions
const companyWorkerIsLoading = (bool) => {
  return {
    type: COMPANY_WORKER_IS_LOADING,
    isLoading: bool
  };
};

const companyWorkerLoadingError = (err) => {
  return {
    type: COMPANY_WORKER_LOADING_ERROR,
    errCode: err.response.status,
    errMessage: err.message,
    isError: true
  };
};

const companyWorkerLoaded = (data) => {
  return {
    type: COMPANY_WORKER_LOADED,
    payload: data,
    loaded: true
  };
};

const GET_COMPANY_WORKERS_BY_RANGE = (companyId, pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(companyWorkerIsLoading(true));

    GetCompanyWorkersByRange(companyId, pageNumber, pageSize)
      .then((response) => {})
      .catch((err) => {});
  };
};
