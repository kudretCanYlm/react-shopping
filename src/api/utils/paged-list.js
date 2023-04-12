const createOrderByObject = (field = '', direction = 0, priority = 1) => {
  var orderBysObject = {
    Field: field,
    Direction: direction,
    Priority: priority
  };

  return orderBysObject;
};

const combineOrderByObjects = (orderByObjects = []) => [...orderByObjects];

const createFilterObject = (field = '', operator = 0, value = '') => {
  var filterObject = {
    Field: field,
    Operator: operator,
    Value: value
  };

  return filterObject;
};

const combineFilterObjects = (filterObjects = []) => [...filterObjects];

const createPagedListPostObject = (
  pageNumber,
  pageSize,
  orderBys = [],
  filters = [],
  pagingStrategy = 0
) => {
  const pagedListObject = {
    PageIndex: pageNumber,
    PageSize: pageSize,
    PagingStrategy: pagingStrategy,
    SortingOptions: orderBys,
    FilteringOptions: filters
  };

  console.log(JSON.stringify(pagedListObject));

  return JSON.stringify(pagedListObject);
};

export {
  createOrderByObject,
  combineOrderByObjects,
  createFilterObject,
  combineFilterObjects,
  createPagedListPostObject
};
