import BaseApiClass from 'api/utils/base-api';

const projectBaseUrl = '/project';

//routes
const getProjectsByRange = projectBaseUrl + '/getProjectsByRange';

//get
const GetProjectsByRange = async (pageNumber, pageSize) => {
  const baseApiClass = new BaseApiClass();
  const projects = await baseApiClass
    .BaseApi()
    .get(`${getProjectsByRange}/${pageNumber}/${pageSize}`);
  return projects;
};

//post
export { GetProjectsByRange };
