import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

const ScoreCard = ({ score, className, iconSize }) => {
  if (score > 5 || score < 0) score = 'null';

  const color = 'orange';

  return (
    <div className={`score-card flex-row ${className}`}>
      <AiFillStar className="icon-margin-right-1" fontSize={iconSize} color={color} />
      <span>{score}</span>
      <span className="title-color-2">/5</span>
    </div>
  );
};

//propTypes
ScoreCard.propTypes = {
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  iconSize: PropTypes.number.isRequired,
  className: PropTypes.string
};

//default props
ScoreCard.defaultProps = {
  score: 'null',
  iconSize: 20,
  className: ''
};

export default ScoreCard;
