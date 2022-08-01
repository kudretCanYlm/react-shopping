import React from 'react';
import PropTypes from 'prop-types';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import ThickMidTitle from '../../base/headers/ThickMidTitle';
import ArrowUpDownIcon from '../../base/icons/ArrowUpDownIcon';

const NewMembersCard = ({ thisYearAmount, lastYearAmount, className = '' }) => {
  return (
    <StyleRoot>
      <div
        style={fades.fadeInRight}
        className={`new-members-card flex-row flex-center-items ${className}`}
      >
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
    </StyleRoot>
  );
};

export default NewMembersCard;

//protoTypes
NewMembersCard.propTypes = {
  thisYearAmount: PropTypes.string.isRequired,
  lastYearAmount: PropTypes.string.isRequired,
  className: PropTypes.string
};
