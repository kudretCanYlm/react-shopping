import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { DEFAULT_CONTENT_TEXT } from 'components/base/texts/common/common-props';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ContentText from 'components/base/texts/ContentText';

const ColorCard = ({ text, className }) => {
  const cardVariants = {
    offhover: {
      borderRadius: 0
    },
    onhover: {
      borderRadius: '50%',
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  let colors = ['card-col-1', 'card-col-2', 'card-col-3', 'card-col-4', 'card-col-5'];

  const [cardColor, setCardColor] = useState(colors[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * colors.length);
    console.log(index);

    setCardColor(colors[index]);
  }, []);

  return (
    <motion.div whileHover="onhover" className={`color-card flex-column ${cardColor} ${className}`}>
      <motion.div className="content">
        <ThinMidTitle className="title-color-4 title-margin-2 center-left title-color-1 ">
          {text.title}
        </ThinMidTitle>
        <ContentText className="title-fontsize-min-3 center-left white-2">{text.body}</ContentText>
      </motion.div>
      <motion.div className="migrate" variants={cardVariants}></motion.div>
    </motion.div>
  );
};

//prop-types
ColorCard.propTypes = {
  text: {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  },
  className: PropTypes.string
};

//default props
ColorCard.defaultProps = {
  text: {
    title: 'Empty Title',
    body: DEFAULT_CONTENT_TEXT
  },
  className: ''
};

export default ColorCard;
