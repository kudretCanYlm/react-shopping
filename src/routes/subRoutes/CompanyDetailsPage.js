import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import TabTypeA from 'components/base/tabs/TabTypeA';
import CompanyCard from 'components/main/cards/detailsCards/CompanyCard';
import CompanyDetailsCardMini from 'components/main/cards/detailsCards/CompanyDetailsCardMini';
import MemberDetailsMiniCard from 'components/main/cards/detailsCards/MemberDetailsMiniCard';
import SupporterCard from 'components/main/cards/detailsCards/SupporterCard';
import ProjectCard from 'components/main/cards/ProjectCard';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import { toProjectDetailsPage } from 'utils/Redirects';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import ColorCard from 'components/main/cards/animationCards/ColorCard';
import ListCard from 'components/main/cards/animationCards/ListCard';
import EventsSliderCard from 'components/main/cards/detailsCards/EventsSliderCard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CompanyDetailsPage = (props) => {
  const { companyId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [tabIndex, setTabIndex] = useState(searchParams.get('tab') ?? 0);

  useEffect(() => {
    setSearchParams({ ['tab']: 0 });
    setTabIndex(searchParams.get('tab') ?? 0);
  }, []);

  const tabSelect = (index) => {
    setTabIndex(index);
    setSearchParams({ ['tab']: index });
  };

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

  const persons = [
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    },
    {
      id: 'sdfsdfdsf-sdfsd7654f-d54f6g4f6hfhfgh',
      name: 'Test Name',
      role: 'Project Manager',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU'
    }
  ];

  // sort by degree from server
  const supporters = [
    {
      id: 'adsaddsf-sdfdsfsdf-fghfghfgh-dgdfgdfgfdg',
      name: 'Test Name',
      job: 'Test Job',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU',
      degree: 2
    },
    {
      id: 'adsaddsf-sdfdsfsdf-fghfghfgh-dgdfgdfgfdg',
      name: 'Test Name',
      job: 'Test Job',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU',
      degree: 0
    },
    {
      id: 'adsaddsf-sdfdsfsdf-fghfghfgh-dgdfgdfgfdg',
      name: 'Test Name',
      job: 'Test Job',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU',
      degree: 0
    },
    {
      id: 'adsaddsf-sdfdsfsdf-fghfghfgh-dgdfgdfgfdg',
      name: 'Test Name',
      job: 'Test Job',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU',
      degree: 0
    },
    {
      id: 'adsaddsf-sdfdsfsdf-fghfghfgh-dgdfgdfgfdg',
      name: 'Test Name',
      job: 'Test Job',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU',
      degree: 1
    },
    {
      id: 'adsaddsf-sdfdsfsdf-fghfghfgh-dgdfgdfgfdg',
      name: 'Test Name',
      job: 'Test Job',
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04ZndPl3TMJ4GMG8UeiY8XGh8ifpnPGHTbw&usqp=CAU',
      degree: 3
    }
  ];

  const companiesMini = [
    {
      id: 'easd54-das8d4s5ad',
      name: 'Test Company',
      logo: 'https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr',
      job: 'Software Company',
      score: 3
    },
    {
      id: 'easd54-das8d4s5ad',
      name: 'Static 8',
      logo: 'https://static8.depositphotos.com/1378583/1010/i/600/depositphotos_10108949-stock-photo-blue-flame-logo.jpg',
      job: 'Software Company',
      score: 4
    },
    {
      id: 'easd54-das8d4s5ad',
      name: 'Seek C',
      logo: 'https://seeklogo.com/images/C/corporate-company-logo-BAE6B43FF7-seeklogo.com.png',
      job: 'Software Company',
      score: 2.8
    },
    {
      id: 'Dribble',
      name: 'Test Company',
      logo: 'https://cdn.dribbble.com/users/371199/screenshots/11891575/media/6df51f6e524e3918c4ccec381d4f4523.jpg?compress=1&resize=400x300',
      job: 'Software Company',
      score: 3.6
    },
    {
      id: 'easd54-das8d4s5ad',
      name: 'Miro',
      logo: 'https://miro.medium.com/max/720/1*p8SGPFKYcbRWKfdj50wNxQ.png',
      job: 'Software Company',
      score: 4
    }
  ];

  const purposes = [
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    },
    {
      title: 'Check Feedback',
      body: 'Read view suprise,work be the leave been live i the processed'
    }
  ];

  const histories = [
    {
      text: 'We were founded in 2010'
    },
    {
      text: 'We were founded in 2010'
    },
    {
      text: 'We were founded in 2010'
    },
    {
      text: 'We were founded in 2010'
    },
    {
      text: 'We were founded in 2010'
    },
    {
      text: 'We were founded in 2010'
    },
    {
      text: 'We were founded in 2010'
    }
  ];

  const events = [
    {
      id: 'das4das6d54dsf-ds6f4d6s5f46-ads',
      imgUrl:
        'https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C',
      title: 'Test Title',
      about:
        'test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest test test test test test test test test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest '
    },
    {
      id: 'das4das6d54dsf-ds6f4d6s5f46-ads',
      imgUrl: 'https://www.kulturservisi.com/wp-content/uploads/2021/04/orman1.jpg',
      title: 'Test Title',
      about:
        'test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest '
    },
    {
      id: 'das4das6d54dsf-ds6f4d6s5f46-ads',
      imgUrl: 'https://img.tamindir.com/2022/03/470608/the-forest-sistem-gereksinimleri-neler.jpg',
      title: 'Test Title',
      about:
        'test test test test test test test tset set set set est set set est settest test test test test test test test tset set set set est set set est settest '
    }
  ];

  const tabList = ['Projects', 'Persons', 'Supporters', 'About Us'];

  return (
    <div className="company-details-page flex-row">
      <div className="company-details-page-left">
        <CompanyCard companyDetails={companyDetails} className="card-company" />
        <Tabs className={'full-width'} selectedIndex={tabIndex} onSelect={tabSelect}>
          <TabList className="tab-list flex-row">
            {tabList.map((tab, key) => (
              <TabTypeA key={key} className={tabIndex == key ? 'bg-col-1-hover-1' : ''}>
                {tab}
              </TabTypeA>
            ))}
          </TabList>
          <TabPanel>
            <StyleRoot>
              <div style={fades.fadeInUpBig} className="projects flex-row">
                {projects.map((project, key) => (
                  <ProjectCard
                    project={{
                      title: project.title,
                      about: project.about,
                      imgUrl: project.imgUrl,
                      to: toProjectDetailsPage(project.id)
                    }}
                    className="card-project"
                    key={key}
                  />
                ))}
              </div>
            </StyleRoot>
          </TabPanel>
          <TabPanel>
            <StyleRoot>
              <div style={fades.fadeInUpBig} className="members flex-row">
                {persons.map((person, key) => (
                  <MemberDetailsMiniCard
                    key={key}
                    memberMini={person}
                    className="card-member-mini"
                  />
                ))}
              </div>
            </StyleRoot>
          </TabPanel>
          <TabPanel>
            <StyleRoot>
              <div style={fades.fadeInUpBig} className="supporters flex-row">
                {supporters.map((supporter, key) => (
                  <SupporterCard supporter={supporter} key={key} className="card-supporter" />
                ))}
              </div>
            </StyleRoot>
          </TabPanel>
          <TabPanel>
            <StyleRoot>
              <div style={fades.fadeInUpBig} className="about-us flex-column">
                <ThinMidTitle className="title-color-5 title-margin-1 center-text">
                  Our Purposes
                </ThinMidTitle>
                <div className="purposes flex-row">
                  {purposes.map((purpose, key) => (
                    <ColorCard text={purpose} className="" key={key} />
                  ))}
                </div>
                <ThinMidTitle className="title-color-5 title-margin-1 center-text">
                  Who We Are
                </ThinMidTitle>
                <div className="histories flex-row">
                  {histories.map((history, key) => (
                    <ListCard text={history.text} key={key} className="card-list" />
                  ))}
                </div>
                <ThinMidTitle className="title-color-5 title-margin-3 center-text">
                  Our Events
                </ThinMidTitle>
                <div className="events flex-column">
                  <EventsSliderCard events={events} className="events-slider" />
                </div>
              </div>
            </StyleRoot>
          </TabPanel>
        </Tabs>
      </div>
      <div className="company-details-page-right flex-column">
        <ThinMidTitle className="title-color-5 title-margin-1 title-fontsize-2 center-text">
          Other Companies
        </ThinMidTitle>
        {companiesMini.map((companyMini, key) => (
          <CompanyDetailsCardMini
            key={key}
            company={companyMini}
            className="card-company-details"
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetailsPage);
