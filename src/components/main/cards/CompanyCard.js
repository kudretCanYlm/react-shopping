import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import CardImg from 'components/base/img/CardImg';
import ButtonLink from 'components/base/links/ButtonLink';
import { toCompanyDetailsPage } from 'utils/Redirects';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';

const CompanyCard = ({ company, className }) => {
  return (
    <div className={`company-card flex-column ${className}`}>
      <div className="company-card-top flex-column">
        <CardImg imgUrl={company.backgroundUrl} className="background" />
        <CardImg imgUrl={company.logoUrl} className="logo" />
      </div>
      <div className="company-card-center flex-column">
        <ThinMidTitle className="black title-margin-1">{company.name}</ThinMidTitle>
        <div className="content title-margin-4">{company.about}</div>
        <ButtonLink to={toCompanyDetailsPage(company.id)}>Details</ButtonLink>
      </div>
    </div>
  );
};

//prop-types
CompanyCard.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    backgroundUrl: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  }),
  className: PropTypes.string
};

//default props
CompanyCard.defaultProps = {
  company: {
    name: 'Empty Name',
    logoUrl: DEFAULT_IMG_URL,
    backgroundUrl: DEFAULT_IMG_URL,
    about: 'Empty about'
  },
  className: ''
};

export default CompanyCard;
