import BaseApi from 'api/utils/base-api';

const userBaseUrl = '/user';

//routes
const getUserRoleAndDescriptionByRange = userBaseUrl + '/getUserRoleAndDescriptionByRange';

//get
const GetUserRoleAndDescriptionByRange = async (pageNumber, pageSize) => {
  const userRoleAndDescriptions = BaseApi.get(
    `${getUserRoleAndDescriptionByRange}/${pageNumber}/${pageSize}`
  );
  return userRoleAndDescriptions;
};

export { GetUserRoleAndDescriptionByRange };
