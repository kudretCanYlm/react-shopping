import React from 'react';
import PropTypes from 'prop-types';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import TextLink from 'components/base/links/TextLink';
import TextA from 'components/base/texts/TextA';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';

const PersonCard = ({ name, imgUrl, linkTo, className }) => {
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

//propTypes
PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string
};

//default props
PersonCard.defaultProps = {
  name: '',
  imgUrl: DEFAULT_IMG_URL,
  linkTo: '',
  className: ''
};

export default PersonCard;
