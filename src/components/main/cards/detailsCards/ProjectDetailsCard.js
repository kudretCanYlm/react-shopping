import React from 'react';
import PropTypes from 'prop-types';
import ContentText from 'components/base/texts/ContentText';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';
import { DEFAULT_CONTENT_TEXT } from 'components/base/texts/common/common-props';
import VerticalSlider from 'components/base/sliders/VerticalSlider';
import VerticalPersonSlider from 'components/base/sliders/VerticalPersonSlider';

const ProjectDetailsCard = ({ project, className }) => {
  return (
    <div className={`project-details-card flex-column ${className}`}>
      <div className="top flex-row">
        <VerticalSlider images={project.images} className="" />
        <ContentText className="text">{project.ContentText}</ContentText>
        <VerticalPersonSlider slidesPerView={3} persons={project.person} className="" />
      </div>
      <div className="bottom flex-row">
        <OptionCart className={'option'} text={'Price'} value={`${project.price}$`} />
        <OptionCart className={'option'} text={'Users'} value={project.userSize} />
        <OptionCart className={'option'} text={'Rate'} value={project.rate} />
        <OptionCart className={'option'} text={'Supporters'} value={project.supporter} />
      </div>
    </div>
  );
};

ProjectDetailsCard.propTypes = {
  project: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    contentText: PropTypes.string.isRequired,
    person: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        img: PropTypes.string
      })
    ).isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    userSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    supporter: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  className: PropTypes.string.isRequired
};

ProjectDetailsCard.defaultProps = {
  project: {
    images: [DEFAULT_IMG_URL, DEFAULT_IMG_URL, DEFAULT_IMG_URL],
    contentText: DEFAULT_CONTENT_TEXT,
    person: [
      {
        name: 'Null Name',
        img: DEFAULT_IMG_URL
      },
      {
        name: 'Null Name',
        img: DEFAULT_IMG_URL
      },
      {
        name: 'Null Name',
        img: DEFAULT_IMG_URL
      }
    ],
    price: 0,
    userSize: 0,
    rate: 0,
    supporter: 0
  },
  className: ''
};

export default ProjectDetailsCard;

//create a new file for this component
const OptionCart = ({ text, value, className }) => {
  return (
    <div className={`option-card flex-column ${className}`}>
      <h2>{value}</h2>
      <h6>{text}</h6>
    </div>
  );
};
