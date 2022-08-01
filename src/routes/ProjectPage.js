import React from 'react';
import ThickMidTitle from 'components/base/headers/ThickMidTitle';
import ProjectCard from 'components/main/cards/ProjectCard';
import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import { useDispatch } from 'react-redux';
import { CLOSE_NAV_BAR_TEXT_BOX, OPEN_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';

const ProjectPage = () => {
  const dispatch = useDispatch();

  dispatch({ type: OPEN_NAV_BAR_TEXT_BOX });

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
        <div className="content flex-row">
          {projects.map((project, key) => (
            <ProjectCard
              className="icon-margin-3"
              key={key}
              project={{
                title: project.title,
                about: project.about,
                imgUrl: project.imgUrl,
                to: `/project/${project.id}`
              }}
            />
          ))}
        </div>
      </div>
    </DashboardPagesLayout>
  );
};

export default ProjectPage;
