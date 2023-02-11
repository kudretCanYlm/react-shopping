import BaseApi from 'api/utils/base-api';

const companyBaseUrl = '/company';

//routes
const getCompaniesByRange = companyBaseUrl + '/getCompaniesByRange';
const getCompanyWorkersByRange = companyBaseUrl + '/getCompanyWorkersByRange';
const getWorkerRoles = companyBaseUrl + '/getWorkerRoles';

//get
const GetCompaniesByRange = async (pageNumber, pageSize) => {
  const companies = await BaseApi.get(`${getCompaniesByRange}/${pageNumber}/${pageSize}`);

  return companies;
};

const GetCompanyWorkersByRange = async (companyId, pageNumber, pageSize) => {
  const workers = await BaseApi.get(
    `${getCompanyWorkersByRange}/${companyId}/${pageNumber / pageSize}`
  );

  return workers;
};

const GetWorkerRoles = async (workerId, companyId) => {
  const workerRoles = await BaseApi.get(`${getWorkerRoles}/${workerId}/${companyId}`);

  return workerRoles;
};

//put

//delete

//post

export { GetCompaniesByRange, GetCompanyWorkersByRange, GetWorkerRoles };
