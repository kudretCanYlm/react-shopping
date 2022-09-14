import React from 'react';
import PropTypes from 'prop-types';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ButtonLink from 'components/base/links/ButtonLink';
import { toMemberDetailsPage } from 'utils/Redirects';
import BorderIconLink from 'components/base/links/BorderIconLink';
import BlankBorderIconLink from 'components/base/links/BlankBorderIconLink';
import { AiFillStar } from 'react-icons/ai';
import { RiTwitterFill, RiFacebookFill, RiLinkedinFill } from 'react-icons/ri';

const SupporterCard = ({ supporter, className }) => {
  let degreeIconColor;
  const fontsize = 25;

  switch (supporter.degree) {
    case 0:
      degreeIconColor = '#CD7F32';
      break;
    case 1:
      degreeIconColor = '#C0C0C0';
      break;
    case 2:
      degreeIconColor = '#FFD700';
      break;
    case 3:
      degreeIconColor = '#4EE2EC';
      break;

    default:
      degreeIconColor = 'black';
      break;
  }

  let degreeIcon = <AiFillStar fontSize={fontsize} color={degreeIconColor} />;

  return (
    <div className={`supporter-card flex-column ${className}`}>
      <div className="supporter-card-top">
        <MiniRadiusImg url={supporter.profileImg} className="img" />
      </div>
      <div className="supporter-card-center">
        <ThinMidTitle className="title-color-5 title-margin-1">{supporter.name}</ThinMidTitle>
        <ThinMidTitle className="title-color-3 title-fontsize-min-3 title-margin-2">
          {supporter.job}
        </ThinMidTitle>
        <div className="supporter-card-icons flex-row">
          <BorderIconLink className="icon-degree icon-margin-right-2">{degreeIcon}</BorderIconLink>
          <BlankBorderIconLink href="linkedin.com" className="icon-margin-right-2">
            {<RiLinkedinFill fontSize={fontsize} color={'#0072b1'} />}
          </BlankBorderIconLink>
          <BlankBorderIconLink href="facebook.com" className="icon-margin-right-2">
            {<RiFacebookFill fontSize={fontsize} color="#4267B2" />}
          </BlankBorderIconLink>
          <BlankBorderIconLink href="twitter.com">
            {<RiTwitterFill fontSize={fontsize} color={'#1DA1F2'} />}
          </BlankBorderIconLink>
        </div>
      </div>
      <div className="supporter-card-bottom flex-row">
        <ButtonLink to="will add" className="icon-margin-right-2">
          Message
        </ButtonLink>
        <ButtonLink to={toMemberDetailsPage(supporter.id)}>Details</ButtonLink>
      </div>
    </div>
  );
};

//prop-types
SupporterCard.propTypes = {
  supporter: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    degree: PropTypes.number.isRequired
  }).isRequired,
  className: PropTypes.string
};

//default props
SupporterCard.defaultProps = {
  supporter: {
    id: '',
    name: 'Empty Name',
    job: 'Empty Job',
    profileImg: DEFAULT_IMG_URL,
    degree: -1
  },
  className: ''
};

export default SupporterCard;
