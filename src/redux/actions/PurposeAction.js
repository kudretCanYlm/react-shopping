//types
const GET_PURPOSES_BY_ID_TYPE = 'GET_PURPOSES_BY_ID';
const DELETE_PURPOSE_BY_ID_TYPE = 'GET_PURPOSE_BY_ID';
const DELETE_PURPOSES_BY_IDS_TYPE = 'GET_PURPOSES_BY_IDS';
const UPDATE_PURPOSE_BY_ID_TYPE = 'UPDATE_PURPOSE_BY_ID';
const UPDATE_PURPOSES_BY_IDS_TYPE = 'UPDATE_PURPOSES_BY_IDS';

//actions
const GET_PURPOSES_BY_ID = (companyId) => {
  return {
    type: GET_PURPOSES_BY_ID_TYPE,
    payload: companyId
  };
};

const DELETE_PURPOSE_BY_ID = (purposeId) => {
  return {
    type: DELETE_PURPOSE_BY_ID_TYPE,
    payload: purposeId
  };
};

const DELETE_PURPOSES_BY_IDS = (purposeIds = []) => {
  return {
    type: DELETE_PURPOSES_BY_IDS_TYPE,
    payload: purposeIds
  };
};

const UPDATE_PURPOSE_BY_ID = (purposeId, purpose) => {
  return {
    type: UPDATE_PURPOSE_BY_ID_TYPE,
    payload: { purposeId, purpose }
  };
};

const UPDATE_PURPOSES_BY_IDS = (purposeIds = [], purposes = []) => {
  return {
    type: UPDATE_PURPOSES_BY_IDS_TYPE,
    payload: { purposeIds, purposes }
  };
};

export {
  GET_PURPOSES_BY_ID,
  DELETE_PURPOSE_BY_ID,
  DELETE_PURPOSES_BY_IDS,
  UPDATE_PURPOSE_BY_ID,
  UPDATE_PURPOSES_BY_IDS,
  GET_PURPOSES_BY_ID,
  DELETE_PURPOSE_BY_ID,
  DELETE_PURPOSES_BY_IDS,
  UPDATE_PURPOSE_BY_ID,
  UPDATE_PURPOSES_BY_IDS
};
