import DetailsSlider from 'components/base/sliders/DetailsSlider';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsPage = () => {
  let { projectId } = useParams();

  return (
    <>
      <DetailsSlider />
    </>
  );
};

export default ProjectDetailsPage;
