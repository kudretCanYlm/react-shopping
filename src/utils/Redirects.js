const toCompanyDetailsPage = (companyId) => {
  return `/company/${companyId}`;
};

const toMemberReportPage = (memberId) => {
  return `/report/member/${memberId}`;
};

const toArticleDetailPage = (articleId) => {
  return `/article/${articleId}`;
};

export { toCompanyDetailsPage, toMemberReportPage, toArticleDetailPage };
