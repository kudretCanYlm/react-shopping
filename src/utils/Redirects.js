const toCompanyDetailsPage = (companyId) => {
  return `/company/${companyId}`;
};

const toMemberReportPage=(memberId)=>{
  return `/report/member/${memberId}`
}
export { toCompanyDetailsPage,toMemberReportPage };
