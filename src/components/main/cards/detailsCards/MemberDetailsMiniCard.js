import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_CONTENT_TEXT } from 'components/base/texts/common/common-props';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import ButtonLink from 'components/base/links/ButtonLink';
import { toMemberDetailsPage } from 'utils/Redirects';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';

const MemberDetailsMiniCard = ({ memberMini, className }) => {
  return (
    <div className={`member-details-card-mini flex-row ${className}`}>
      <div className="member-details-card-mini-left">
        <MiniRadiusImg url={memberMini.profileImg} className="img" />
      </div>
      <div className="member-details-card-mini-center flex-column">
        <ThinMidTitle className="title-color-5 title-margin-1">{memberMini.name}</ThinMidTitle>
        <ThinMidTitle className="title-color-3 title-fontsize-min-3 title-margin-2">
          {memberMini.role}
        </ThinMidTitle>
      </div>
      <div className="member-details-card-mini-right flex-column">
        <ButtonLink to={toMemberDetailsPage(memberMini.id)} className="btn">
          Details
        </ButtonLink>
      </div>
    </div>
  );
};

//prop-types
MemberDetailsMiniCard.propTypes = {
  memberMini: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string.isRequired
};

//default props
MemberDetailsMiniCard.defaultProps = {
  memberMini: {
    name: 'Empty Name',
    role: 'Empty Role',
    about: DEFAULT_CONTENT_TEXT,
    profileImg: DEFAULT_IMG_URL
  },
  className: ''
};

export default MemberDetailsMiniCard;
