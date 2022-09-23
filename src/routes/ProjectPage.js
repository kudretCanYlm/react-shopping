import React, { useEffect } from 'react';
import ThickMidTitle from 'components/base/headers/ThickMidTitle';
import ProjectCard from 'components/main/cards/ProjectCard';
import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import { connect } from 'react-redux';
import { OPEN_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';
import { useTitle } from 'hooks/page-hooks';
import { toProjectDetailsPage } from 'utils/Redirects';

const mapStateToProps = (state) => ({
  textBoxReducer: state.TextBoxReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    openNavBarTextBox: () => dispatch({ type: OPEN_NAV_BAR_TEXT_BOX })
  };
};

const ProjectPage = (props) => {
  const { openNavBarTextBox } = props;

  useEffect(() => {
    openNavBarTextBox();
  }, []);

  useTitle(`Project Page`);

  let projects = [
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    },
    {
      id: 'asd542-sdf556-ghj2323',
      title: 'Test',
      about:
        'Test test stest sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg sds sdsdf fdgfdg dfg',
      imgUrl:
        'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0'
    }
  ];

  return (
    <DashboardPagesLayout>
      <div className="flex-column project-page">
        <div className="title center-text">
          <ThickMidTitle className="title-fontsize-3">Our Projects</ThickMidTitle>
        </div>
        <StyleRoot>
          <div style={fades.fadeInUp} className="content flex-row">
            {projects.map((project, key) => (
              <ProjectCard
                className="icon-margin-3 project-card"
                key={key}
                project={{
                  title: project.title,
                  about: project.about,
                  imgUrl: project.imgUrl,
                  to: toProjectDetailsPage(project.id)
                }}
              />
            ))}
          </div>
        </StyleRoot>
      </div>
    </DashboardPagesLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
