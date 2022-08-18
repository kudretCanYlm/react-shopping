import DetailsSlider from 'components/base/sliders/DetailsSlider';
import CompanyCard from 'components/main/cards/detailsCards/CompanyCard';
import React from 'react';
import { useParams } from 'react-router-dom';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';

const ProjectDetailsPage = () => {
  let { projectId } = useParams();

  const images = [
    'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0',
    'https://www.iakademi.com/wp-content/uploads/2021/05/microsoft-project-nedir-1170x500.png',
    'https://thumbs.dreamstime.com/b/business-team-to-calculate-financial-information-invest-new-projects-manager-meeting-euing-smart-phone-laptop-digital-167938232.jpg',
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/what_is_a_project_manager_-_article_image.jpg',
    'https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2021/04/project-management-challenges.jpg'
  ];

  const companyDetails = {
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXefcnF1Hpqd22IWogM0KWKcgK-mJ_U0j--w&usqp=CAU',
    companyName: 'Micrest Company',
    address: '192 north week, unknown town',
    about:
      'our company is test,for the other person and persons future. our company is test,for the other person and persons future. our company is test,for the other person and persons future.',
    score: 4.75,
    companyWebSite: 'youtube.com',
    options: [
      {
        text: 'Total project',
        value: 50
      },
      {
        text: 'Total customer',
        value: 5200
      },
      {
        text: 'Total employes',
        value: 321
      },
      {
        text: 'Total employes',
        value: 321
      }
    ]
  };

  return (
    <div className="project-details-page flex-column">
      <DetailsSlider images={images} className="" />
      <StyleRoot>
        <div style={fades.fadeIn} className="card">
          <CompanyCard companyDetails={companyDetails} className="" />
        </div>
      </StyleRoot>
    </div>
  );
};

export default ProjectDetailsPage;
