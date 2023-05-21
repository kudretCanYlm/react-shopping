import BaseApiClass from 'api/utils/base-api';
import { createPagedListPostObject } from 'api/utils/paged-list';

const userBaseUrl = '/user';

//routes
const getUserRoleAndDescriptionByRange = userBaseUrl + '/getUserRoleAndDescriptionByRange';
const getUserRoleAndDescriptionByPagedList = userBaseUrl + '/getUserRoleAndDescriptionByPagedList';
const getAuthorizedUserInformationMini = userBaseUrl + '/getAuthorizedUserInformationMini';

//get
const GetUserRoleAndDescriptionByRange = async (pageNumber, pageSize) => {
  const baseApiClass = new BaseApiClass();
  const userRoleAndDescriptions = await baseApiClass
    .BaseApi()
    .get(`${getUserRoleAndDescriptionByRange}/${pageNumber}/${pageSize}`);
  return userRoleAndDescriptions;
};

const GetUserRoleAndDescriptionByPagedList = async (
  pageNumber,
  pageSize,
  orderBys = [],
  filters = []
) => {
  const baseApiClass = new BaseApiClass();
  const userRoleAndDescriptionByPagedList = await baseApiClass
    .BaseApi()
    .post(
      getUserRoleAndDescriptionByPagedList,
      createPagedListPostObject(pageNumber, pageSize, orderBys, filters)
    );

  return userRoleAndDescriptionByPagedList;
};

const GetAuthorizedUserInformationMini = async () => {
  const baseApiClass = new BaseApiClass();
  const authorizedUserInformationMini = await baseApiClass
    .BaseApi()
    .get(`${getAuthorizedUserInformationMini}`);

  return authorizedUserInformationMini;
};

export {
  GetUserRoleAndDescriptionByRange,
  GetUserRoleAndDescriptionByPagedList,
  GetAuthorizedUserInformationMini
};
