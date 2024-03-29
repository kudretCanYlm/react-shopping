import React from 'react';
import PropTypes from 'prop-types';
import ThickMidTitle from 'components/base/headers/ThickMidTitle';
import ArrowUpDownIcon from 'components/base/icons/ArrowUpDownIcon';

const NewMembersCard = ({ thisYearAmount, lastYearAmount, className }) => {
  return (
    <div className={`new-members-card flex-row flex-center-items ${className}`}>
      <div className="new-members-card-cell">
        <ThickMidTitle className="title-fontsize-3 title-color-1">NEW MEMBERS</ThickMidTitle>
        <ThickMidTitle className="title-fontsize-min-3 title-color-1 ">IN NUMBERS</ThickMidTitle>
      </div>
      <div className="new-members-card-cell flex-row flex-center-items">
        <ArrowUpDownIcon fontSize={55} />
        <div className="new-members-card-cell-text flex-column ">
          <div>
            <ThickMidTitle className="title-fontsize-1 title-color-1">LAST YEAR</ThickMidTitle>
          </div>
          <div>
            <ThickMidTitle className="title-fontsize-1 title-color-1">
              {lastYearAmount}
            </ThickMidTitle>
          </div>
        </div>
      </div>
      <div className="new-members-card-cell flex-row flex-center-items">
        <ArrowUpDownIcon fontSize={55} />
        <div className="new-members-card-cell-text flex-column ">
          <div>
            <ThickMidTitle className="title-fontsize-1 title-color-1">THIS YEAR</ThickMidTitle>
          </div>
          <div>
            <ThickMidTitle className="title-fontsize-1 title-color-1">
              {thisYearAmount}
            </ThickMidTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

//protoTypes
NewMembersCard.propTypes = {
  thisYearAmount: PropTypes.string.isRequired,
  lastYearAmount: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
NewMembersCard.defaultProps = {
  thisYearAmount: '0',
  lastYearAmount: '0',
  className: ''
};

export default NewMembersCard;
