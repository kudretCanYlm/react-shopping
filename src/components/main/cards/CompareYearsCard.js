import { useState, useEffect } from 'react';
import ThickMidTitle from '../../base/headers/ThickMidTitle';
import GraphUpDownIcon from '../../base/icons/GraphUpDownIcon';

const CompareYearsCard = ({ compares = [], className = '' }) => {
  return (
    <div className={`compare-years-card main-card flex-column ${className}`}>
      {compares.map((compare) => (
        <CompareLine
          title={compare.title}
          nameA={compare.nameA}
          valueA={compare.valueA}
          nameB={compare.nameB}
          valueB={compare.valueB}
        />
      ))}
    </div>
  );
};

const CompareLine = ({ title, nameA, valueA, nameB, valueB }) => {
  return (
    <div className="compare-line flex-row">
      <div className="compare-line-cell">
        <ThickMidTitle className="title-fontsize-1">
          {title.split(' ').map((word) => (
            <>
              {
                //alta boşluk eklenecek
                word.toUpperCase() + ' \n'
              }
            </>
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
  );
};

export default CompareYearsCard;
