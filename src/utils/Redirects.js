const toCompanyPage = () => {
  return `/company`;
};

const toCompanyDetailsPage = (companyId) => {
  return `/company/${companyId}`;
};

const toMemberPage = () => {
  return `/member`;
};

const toMemberDetailsPage = (memberId) => {
  return `/member/${memberId}`;
};

const toMemberReportPage = (memberId) => {
  return `/report/member/${memberId}`;
};

const toArticleDetailPage = (articleId) => {
  return `/article/${articleId}`;
};

const toDashboardPage = () => {
  return `/dashboard`;
};

const toEventDetailsPage = (eventId) => {
  return `/event/${eventId}`;
};

const toProjectPage = () => {
  return `/project`;
};

const toProjectDetailsPage = (projectId) => {
  return `/project/${projectId}`;
};

const toChatPage = () => {
  return `/chat`;
};

export {
  toCompanyPage,
  toCompanyDetailsPage,
  toMemberReportPage,
  toArticleDetailPage,
  toMemberPage,
  toMemberDetailsPage,
  toDashboardPage,
  toEventDetailsPage,
  toProjectPage,
  toProjectDetailsPage,
  toChatPage
};
