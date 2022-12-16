import BaseApi from 'api/utils/base-api';

const memberBaseUrl = '/member';

//routes
const getMembersByRange = memberBaseUrl + '/getMembersByRange';

//get
const GetMembersByRange = async (pageNumber, pageSize) => {
  const members = BaseApi.get(`${getMembersByRange}/${pageNumber}/${pageSize}`);
  return members;
};

//post

export { GetMembersByRange };
