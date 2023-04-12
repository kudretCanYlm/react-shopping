import BaseApiClass from 'api/utils/base-api';

const companyBaseUrl = '/company';

//routes
const getCompaniesByRange = companyBaseUrl + '/getCompaniesByRange';
const getCompanyWorkersByRange = companyBaseUrl + '/getCompanyWorkersByRange';
const getWorkerRoles = companyBaseUrl + '/getWorkerRoles';

//get
const GetCompaniesByRange = async (pageNumber, pageSize) => {
  const baseApiClass = new BaseApiClass();
  const companies = await baseApiClass
    .BaseApi()
    .get(`${getCompaniesByRange}/${pageNumber}/${pageSize}`);

  return companies;
};

const GetCompanyWorkersByRange = async (companyId, pageNumber, pageSize) => {
  const baseApiClass = new BaseApiClass();
  const workers = await baseApiClass
    .BaseApi()
    .get(`${getCompanyWorkersByRange}/${companyId}/${pageNumber / pageSize}`);

  return workers;
};

const GetWorkerRoles = async (workerId, companyId) => {
  const baseApiClass = new BaseApiClass();
  const workerRoles = await baseApiClass
    .BaseApi()
    .get(`${getWorkerRoles}/${workerId}/${companyId}`);

  return workerRoles;
};

//put

//delete

//post

export { GetCompaniesByRange, GetCompanyWorkersByRange, GetWorkerRoles };
