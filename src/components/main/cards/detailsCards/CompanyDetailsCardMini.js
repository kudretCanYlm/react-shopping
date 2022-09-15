import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ScoreCard from './ScoreCard';
import BorderIconLink from 'components/base/links/BorderIconLink';
import { AiFillEye } from 'react-icons/ai';
import { toCompanyDetailsPage } from 'utils/Redirects';

const CompanyDetailsCardMini = ({ company, className }) => {
  return (
    <div className={`company-details-card-mini flex-row ${className}`}>
      <div className="flex-row">
        <MiniRadiusImg url={company.logo} className="icon-margin-right-2" />
        <div className="flex-column">
          <ThinMidTitle className="title-color-3 title-fontsize-min-3 title-margin-2">
            {company.name}
          </ThinMidTitle>
          <ScoreCard score={company.score} iconSize={20} className="" />
        </div>
      </div>
      <div>
        <BorderIconLink to={toCompanyDetailsPage(company.id)}>
          <AiFillEye fontSize={20} color="white" />
        </BorderIconLink>
      </div>
    </div>
  );
};

CompanyDetailsCardMini.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  }).isRequired,
  className: PropTypes.string
};

CompanyDetailsCardMini.defaultProps = {
  company: {
    id: '',
    name: 'Empty Name',
    logo: DEFAULT_IMG_URL,
    job: 'Empty Job',
    score: -1
  },
  className: ''
};

export default CompanyDetailsCardMini;
