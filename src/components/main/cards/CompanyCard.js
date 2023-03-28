import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import CardImg from 'components/base/img/CardImg';
import ButtonLink from 'components/base/links/ButtonLink';
import { toCompanyDetailsPage } from 'utils/Redirects';

const CompanyCard = ({ company, className }) => {
  //https://i.pinimg.com/736x/02/52/28/0252284a8382aff1095d2dbd9d8f343a--dashboard-design-card-ui-dashboard.jpg

  return (
    <div className={`company-card flex-column ${className}`}>
      <CardImg imgUrl={company.logoUrl} className="img" />
      <div className="content">
        content
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
    location: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    totalProject: PropTypes.number.isRequired
  }),
  className: PropTypes.string
};

//default props
CompanyCard.defaultProps = {
  company: {
    name: 'Empty Name',
    logoUrl: DEFAULT_IMG_URL,
    location: 'Empty Location',
    about: 'Empty about',
    score: -1,
    totalProject: -1
  },
  className: ''
};

export default CompanyCard;
