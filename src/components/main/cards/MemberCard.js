import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from 'components/base/links/ButtonLink';
import CardImg from 'components/base/img/CardImg';

const MemberCard = ({ member, className, to }) => {
  return (
    <div
      className={`main-card title-color-1 flex-center-items member-card flex-column ${className}`}>
      <CardImg className="member-img " imgUrl={member.imgUrl} />
      <div className="title center-text">
        <h2 className="title-margin-1">{member.name}</h2>
        <h3 className="title-margin-1">{member.job}</h3>
      </div>
      <div className="content title-margin-5">
        <p>{member.description}</p>
      </div>
      <ButtonLink className="member-btn" to={to}>
        Details
      </ButtonLink>
    </div>
  );
};

//propTypes
MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }),
  className: PropTypes.string,
  to: PropTypes.string.isRequired
};

//default props
MemberCard.defaultProps = {
  member: {
    id: '',
    name: 'Empty',
    imgUrl: '',
    job: 'Empty',
    description: 'Empty'
  },
  className: '',
  to: ''
};

export default MemberCard;
