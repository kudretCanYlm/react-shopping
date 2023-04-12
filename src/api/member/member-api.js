import baseApiClass from 'api/utils/base-api';

const memberBaseUrl = '/member';

//routes
const getMembersByRange = memberBaseUrl + '/getMembersByRange';

//get
const GetMembersByRange = async (pageNumber, pageSize) => {
  const baseApiClass = new BaseApiClass();
  const members = await baseApiClass
    .BaseApi()
    .get(`${getMembersByRange}/${pageNumber}/${pageSize}`);
  return members;
};

//post

export { GetMembersByRange };
