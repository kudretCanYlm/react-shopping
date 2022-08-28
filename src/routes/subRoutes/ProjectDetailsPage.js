import DetailsSlider from 'components/base/sliders/DetailsSlider';
import CompanyCard from 'components/main/cards/detailsCards/CompanyCard';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import ProjectDetailsCard from 'components/main/cards/detailsCards/ProjectDetailsCard';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ScrollCard from 'components/main/cards/animationCards/ScrollCard';
import { CgAlarm, CgAlbum, CgAlignMiddle } from "react-icons/cg"

const ProjectDetailsPage = () => {
  let { projectId } = useParams();

  const images_list = [
    'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0',
    'https://www.iakademi.com/wp-content/uploads/2021/05/microsoft-project-nedir-1170x500.png',
    'https://thumbs.dreamstime.com/b/business-team-to-calculate-financial-information-invest-new-projects-manager-meeting-euing-smart-phone-laptop-digital-167938232.jpg',
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/what_is_a_project_manager_-_article_image.jpg',
    'https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2021/04/project-management-challenges.jpg'
  ];

  const companyDetails_list = {
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

  const project_list = {
    name: 'Test Name',
    images: [
      'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/images/blog/group_projects.png.webp?itok=tQSafZj0',
      'https://www.iakademi.com/wp-content/uploads/2021/05/microsoft-project-nedir-1170x500.png',
      'https://thumbs.dreamstime.com/b/business-team-to-calculate-financial-information-invest-new-projects-manager-meeting-euing-smart-phone-laptop-digital-167938232.jpg',
      'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/what_is_a_project_manager_-_article_image.jpg',
      'https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2021/04/project-management-challenges.jpg'
    ],
    ContentText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    person: [
      {
        id: 'asdad-sdfdf8-fghfghf',
        name: 'Alexa Mikovic',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPNwn7z-gariJQxZIKlrxF5ozAi7h5TPK-Q&usqp=CAU'
      },
      {
        id: '464654sdf-564dfgfdg-ghfg4564',
        name: 'Edrik Col',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2K9xcJVlIG31wI5COY_Qep5GahOMmCmLYEQ&usqp=CAU'
      },
      {
        id: '464654sdf-564dfgfdg-ghfg4564',
        name: 'Sükrü Kal',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKIBt5sPs7drR7rIWf3KETzhO2zg8BOcShw&usqp=CAU'
      },
      {
        id: 'asd5as53d4-65fd456fg4d-65df4gfd56',
        name: 'Nagoto Tih',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddMIBWCb8CwhDXje_Qtrw6Sp3lyLpDal0JA&usqp=CAU'
      },
      {
        id: '465465sdfs6fd-4f6g5h46fgh-df6f4d65g',
        name: 'Test Name',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFDRBgqdFwnkIBjCPKua_-5z_a4q3yFrNbw&usqp=CAU'
      },
      {
        id: '54sd65f4sd6f-1f654fg6h4fgh-65fg4hssdf',
        name: 'Dany Alson',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFDRBgqdFwnkIBjCPKua_-5z_a4q3yFrNbw&usqp=CAU'
      }
    ],
    price: 500,
    userSize: 212,
    rate: '7/10',
    supporter: 33
  };

  const [images, setImages] = useState(images_list);
  const [companyDetails] = useState(companyDetails_list);
  const [project, setProject] = useState(project_list);

  return (
    <div className="project-details-page flex-column">
      <DetailsSlider images={images} className="slider" />
      <StyleRoot>
        <div style={fades.fadeIn} className="card-company">
          <CompanyCard companyDetails={companyDetails} className="" />
        </div>
      </StyleRoot>
      <ThinMidTitle className="center-text title-margin-2">{project.name}</ThinMidTitle>
      <StyleRoot>
        <div style={fades.fadeIn} className="card-project-details">
          <ProjectDetailsCard project={project} />
        </div>
      </StyleRoot>
      {/* test */}
      <div className='card-options flex-column'>
        <ScrollCard hueA={205} hueB={245}>
          <CgAlarm color='#0D8AE1' fontSize={200} />
        </ScrollCard>
        <ScrollCard hueA={260} hueB={290}>
          <CgAlbum color='#6F2CFF' fontSize={200} />
        </ScrollCard>
        <ScrollCard hueA={290} hueB={320}>
          <CgAlignMiddle color='#B533FF' fontSize={200} />
        </ScrollCard>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
