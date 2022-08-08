import React from 'react';
import PropTypes from 'prop-types';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import PersonCard from './PersonCard';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';

const SupportTicketsCard = ({ personInfo, className }) => {
  return (
    <div className={`support-tickets-card main-card flex-column ${className}`}>
      <ThinMidTitle className="title-margin-3 title-border-bottom-1">Support Tickets</ThinMidTitle>
      {personInfo.length > 0 ? (
        personInfo.map((person, id) => (
          <PersonCard
            name={person.name}
            imgUrl={person.imgUrl}
            key={id}
            linkTo={`member/${person.id}`}
            className={'title-margin-2'}
          />
        ))
      ) : (
        <ThinMidTitle>There isn&apos;t nothing</ThinMidTitle>
      )}
    </div>
  );
};

//propTypes
SupportTicketsCard.propTypes = {
  personInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired
    })
  ),
  className: PropTypes.string
};

//default props
SupportTicketsCard.defaultProps = {
  personInfo: [
    {
      id: 'Empty',
      name: 'Empty',
      imgUrl: DEFAULT_IMG_URL
    }
  ]
};

export default SupportTicketsCard;
