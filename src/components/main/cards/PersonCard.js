import React from 'react';
import PropTypes from 'prop-types';
import { StyleRoot } from 'radium';
import { fades } from "components/base/animations/Animations"
import MiniRadiusImg from '../../base/img/MiniRadiusImg';
import TextLink from '../../base/links/TextLink';
import TextA from '../../base/texts/TextA';

const PersonCard = ({ name, imgUrl, linkTo, className = '' }) => {
  return (
    <StyleRoot>
      <div style={fades.fadeInRight} className={`person-card flex-row ${className}`}>
        <div className="flex-column">
          <TextA>{name}</TextA>
          <TextLink to={linkTo}>click here details</TextLink>
        </div>
        <MiniRadiusImg url={imgUrl} />
      </div>
    </StyleRoot>
  );
};

export default PersonCard;

//propTypes
PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string
};
