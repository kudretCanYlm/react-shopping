import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import BackgroundImg from 'components/base/img/BackgroundImg';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import { GoReport } from "react-icons/go";
import BorderIconLink from 'components/base/links/BorderIconLink';
import { toMemberReportPage } from 'utils/Redirects';
import ContentText from 'components/base/texts/ContentText';
import ClassicButton from 'components/base/buttons/ClassicButton';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import { DEFAULT_CONTENT_TEXT } from 'components/base/texts/common/common-props';

const MemberDetailsCard = ({ member, className }) => {
  return (
    <div className={`member-details-card flex-column ${className}`}>
      <div className="top">
        <BackgroundImg imgUrl={member.BackImg} className="" />
      </div>
      <div className="bottom">
        <div className='bottom-top flex-row'>
          <MiniRadiusImg url={member.profileImg} className="member-img" />
          <BorderIconLink to={toMemberReportPage(member.memberId)} className="icon-margin-top-1">
            <GoReport fontSize={20} />
          </BorderIconLink>
        </div>
        <div className='bottom-bottom'>
          <ThinMidTitle className='title-color-5 title-margin-1'>{member.name}</ThinMidTitle>
          <ThinMidTitle className='title-color-3 title-fontsize-1 title-margin-2'>{member.role}</ThinMidTitle>
          <div className='flex-row flex-space-between flex-center-items'>
            <ContentText>{member.about}</ContentText>
            <ClassicButton className='icon-margin-1' text='Follow' onClick={() => { /*will add a function*/ }} />
          </div>
        </div>
      </div>
    </div>
  );
};

//propTypes
MemberDetailsCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    BackImg: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string
};

//default props
MemberDetailsCard.defaultProps = {
  member: {
    name: 'Empty Name',
    role: 'Empty Role',
    about: DEFAULT_CONTENT_TEXT,
    profileImg: DEFAULT_IMG_URL,
    BackImg: DEFAULT_IMG_URL
  },
  className: ''
};

export default MemberDetailsCard;
