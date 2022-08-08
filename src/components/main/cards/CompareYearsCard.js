import React from 'react';
import PropTypes from 'prop-types';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import ThickMidTitle from 'components/base/headers/ThickMidTitle';
import GraphUpDownIcon from 'components/base/icons/GraphUpDownIcon';

const CompareYearsCard = ({ compares, className }) => {
  return (
    <div className={`compare-years-card main-card flex-column ${className}`}>
      {compares.map((compare, key) => (
        <CompareLine
          title={compare.title}
          nameA={compare.nameA}
          valueA={compare.valueA}
          nameB={compare.nameB}
          valueB={compare.valueB}
          key={key}
        />
      ))}
    </div>
  );
};

CompareYearsCard.propTypes = {
  compares: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      nameA: PropTypes.string.isRequired,
      valueA: PropTypes.string.isRequired,
      nameB: PropTypes.string.isRequired,
      valueB: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

CompareYearsCard.defaultProps = {
  compares: {
    title: 'Empty',
    nameA: 'Empty',
    valueA: 'Empty',
    nameB: 'Empty',
    valueB: 'Empty'
  },
  className: ''
};

export default CompareYearsCard;

const CompareLine = ({ title, nameA, valueA, nameB, valueB }) => {
  return (
    <StyleRoot>
      <div style={fades.fadeInRight} className="compare-line flex-row">
        <div className="compare-line-cell">
          <ThickMidTitle className="title-fontsize-1">
            {title.split(' ').map((word) => (
              <>{word.toUpperCase()}</>
            ))}
          </ThickMidTitle>
        </div>
        <div className="compare-line-cell flex-row flex-center-items">
          <div>
            <GraphUpDownIcon
              isToUp={parseInt(valueB) - parseInt(valueA) > 0}
              fontSize={28}
              className={'icon-margin-2   '}
            />
          </div>
          <div className="flex-column flex-start-items">
            <div>
              <ThickMidTitle className="title-fontsize-1 ">{nameA}</ThickMidTitle>
            </div>
            <div>
              <ThickMidTitle className="title-fontsize-1">{valueA}</ThickMidTitle>
            </div>
          </div>
        </div>
        <div className="compare-line-cell">
          <div>
            <ThickMidTitle className="title-fontsize-1">{nameB}</ThickMidTitle>
          </div>
          <div>
            <ThickMidTitle className="title-fontsize-1">{valueB}</ThickMidTitle>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

CompareLine.propTypes = {
  title: PropTypes.string.isRequired,
  nameA: PropTypes.string.isRequired,
  valueA: PropTypes.string.isRequired,
  nameB: PropTypes.string.isRequired,
  valueB: PropTypes.string.isRequired
};
