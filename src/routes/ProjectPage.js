import React, { useCallback, useEffect, useState } from 'react';
import ThickMidTitle from 'components/base/headers/ThickMidTitle';
import ProjectCard from 'components/main/cards/ProjectCard';
import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import { connect } from 'react-redux';
import { OPEN_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';
import { useScrollIsInBottom, useTitle } from 'hooks/page-hooks';
import { toProjectDetailsPage } from 'utils/Redirects';
import {
  CLEAR_PROJECT,
  GET_PROJECTS_BY_RANGE,
  GET_PROJECT_FIRST_PAGE
} from 'redux/actions/project/ProjectAction';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { memo } from 'react';

const mapStateToProps = (state) => ({
  textBoxReducer: state.TextBoxReducer,
  projectReducer: state.ProjectReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    openNavBarTextBox: () => dispatch({ type: OPEN_NAV_BAR_TEXT_BOX }),
    getProjectsByRange: (pageNumber, pageSize) =>
      dispatch(GET_PROJECTS_BY_RANGE(pageNumber, pageSize)),
    getProjectFirstPage: () => dispatch(GET_PROJECT_FIRST_PAGE()),
    clearProject: () => dispatch(CLEAR_PROJECT())
  };
};

const ProjectPage = (props) => {
  useTitle(`Project Page`);
  const { openNavBarTextBox, getProjectFirstPage, getProjectsByRange, projectReducer } = props;
  const pageSize = 3;

  const handleUserScroll = () => {
    // get scroll top value
    const scrollTop = document.documentElement.scrollTop;

    // get the entire height, including padding
    const scrollHeight = document.documentElement.scrollHeight;

    // check if user is near to the bottom of the body
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      if (
        projectReducer.isLoading != true &&
        projectReducer.isEnd != true &&
        projectReducer.isError != true
      ) {
        getProjectsByRange(projectReducer.pageCount, pageSize);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleUserScroll);

    return () => {
      window.removeEventListener('scroll', handleUserScroll);
    };
  });

  useEffect(() => {
    openNavBarTextBox();

    if ([...projectReducer.payload].length == 0) getProjectFirstPage();
  }, []);

  return (
    <DashboardPagesLayout>
      <div className="flex-column project-page">
        <div className="title center-text">
          <ThickMidTitle className="title-fontsize-3">Our Projects</ThickMidTitle>
        </div>
        <StyleRoot>
          <div style={fades.fadeInUp} className="content flex-row">
            {projectReducer.payload.length > 0
              ? projectReducer.payload.map((project, key) => (
                  <ProjectCard
                    className="icon-margin-3"
                    key={key}
                    project={{
                      title: project.Name,
                      about: project.ContentText,
                      imgUrl: project.imgUrl,
                      to: toProjectDetailsPage(project.Id)
                    }}
                  />
                ))
              : ''}
            {projectReducer.isLoading == true && projectReducer.isError != true ? (
              <SkeletonCreate pageSize={pageSize} />
            ) : (
              ''
            )}
            {projectReducer.isError ? projectReducer.errMessage : ''}
          </div>
        </StyleRoot>
      </div>
    </DashboardPagesLayout>
  );
};

const SkeletonCreate = memo(({ pageSize = 3 }) => {
  return (
    <>
      {[...Array(pageSize)].map(() => {
        console.log('test');
        return (
          <Skeleton
            containerClassName="project-card"
            style={{ height: '100%' }}
            className=" main-card flex-column project-card"
          />
        );
      })}
    </>
  );
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
