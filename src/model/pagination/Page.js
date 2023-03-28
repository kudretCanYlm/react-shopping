const Page = {
  pageSize: 0,
  pageNumber: 0,
  items: []
};

export const initPage = (pageSize, pageNumber) => {
  const Page = { pageSize, pageNumber, items: [] };
  return Page;
};

export default Page;
