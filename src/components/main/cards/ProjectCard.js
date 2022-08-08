import React from 'react';
import PropTypes from 'prop-types';
import CardImg from 'components/base/img/CardImg';
import ContentText from 'components/base/texts/ContentText';
import ButtonLink from 'components/base/links/ButtonLink';
import { DEFAULT_IMG_URL } from 'components/base/img/common/common-props';

const ProjectCard = ({ project, className }) => {
  return (
    <div className={`main-card flex-column project-card ${className}`}>
      <h2 className="title-margin-2">{project.title}</h2>
      <CardImg imgUrl={project.imgUrl} className={'project-card-size title-margin-3'} />
      <ContentText className="title-margin-3">{project.about}</ContentText>
      <ButtonLink to={project.to} className="">
        {'Details'}
      </ButtonLink>
    </div>
  );
};

//proptypes
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }),
  className: PropTypes.string
};

//default props
ProjectCard.defaultProps = {
  project: {
    title: 'Empty',
    imgUrl: DEFAULT_IMG_URL,
    about: 'Empty',
    to: ''
  },
  className: ''
};

export default ProjectCard;
