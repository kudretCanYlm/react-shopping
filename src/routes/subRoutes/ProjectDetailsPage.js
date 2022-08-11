import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsPage = () => {
  let { projectId } = useParams();

  return <>project details page {projectId}</>;
};

export default ProjectDetailsPage;
