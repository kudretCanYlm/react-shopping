import React from 'react';
import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';
import ButtonTextBox from 'components/base/textboxes/ButtonTextBox';
import ListBoxTypeA from 'components/base/listboxes/ListBoxTypeA';
import { StyleRoot } from 'radium';
import { fades } from 'components/base/animations/Animations';
import CompanyCard from 'components/main/cards/CompanyCard';
import { useTitle } from 'hooks/page-hooks';

const CompanyPage = () => {
  useTitle(`Company Page`);

  const list = [
    {
      name: 'most papuler',
      value: 'most-popular-val'
    },
    {
      name: 'A-Z',
      value: 'a-z-val'
    },
    {
      name: 'Z-A',
      value: 'z-a-val'
    },
    {
      name: 'most costly',
      value: 'most costly-val'
    }
  ];

  const companies = [
    {
      id: 'asdsadas-kjljsddff-xzcxc',
      name: 'Test Company',
      logoUrl:
        'https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'asdsadas-sadlasd-dasdasdmöas',
      name: 'Test Company',
      logoUrl:
        'https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'sldkdşsl-kdflnfsd-nzbmnxzbc',
      name: 'Test Company',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-02E1x09_ZlbnvrJ7Dn6HvdVvMPBb6pluw&usqp=CAU',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'lsdfl-sdfsdf-kmvmm',
      name: 'Test Company',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-02E1x09_ZlbnvrJ7Dn6HvdVvMPBb6pluw&usqp=CAU',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'sasdasd-jhhjkhjhj-cvbcvbvc',
      name: 'Test Company',
      logoUrl: 'https://dogucanguler.com/wp-content/uploads/2019/05/final-logo-example-1.png',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'sdfdsfsd-ffgghfghfgh-xxczxczc',
      name: 'Test Company',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-02E1x09_ZlbnvrJ7Dn6HvdVvMPBb6pluw&usqp=CAU',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'sddkjfsdjfsd-jhgnghnhgn-xzcxzcx',
      name: 'Test Company',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-02E1x09_ZlbnvrJ7Dn6HvdVvMPBb6pluw&usqp=CAU',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'lkjsdlfdsf-gfhfgfh-cxvcxvcx',
      name: 'Test Company',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-02E1x09_ZlbnvrJ7Dn6HvdVvMPBb6pluw&usqp=CAU',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'sddkjfsdjfsd-jhgnghnhgn-xzcxzcx',
      name: 'Test Company',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-02E1x09_ZlbnvrJ7Dn6HvdVvMPBb6pluw&usqp=CAU',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'sddkjfsdjfsd-jhgnghnhgn-xzcxzcx',
      name: 'Test Company',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-02E1x09_ZlbnvrJ7Dn6HvdVvMPBb6pluw&usqp=CAU',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    },
    {
      id: 'sddkjfsdjfsd-jhgnghnhgn-xzcxzcx',
      name: 'Test Company',
      logoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-02E1x09_ZlbnvrJ7Dn6HvdVvMPBb6pluw&usqp=CAU',
      location: 'London / England',
      about: 'We are a test company for the test falan filan falan filan',
      score: 2.9,
      totalProject: 50
    }
  ];

  const onClickTextBox = (text) => {
    console.log(text);
  };

  const getListBoxValues = (value) => {
    //will use search function on here
    console.log(value);
  };

  return (
    <DashboardPagesLayout>
      <div className="company-page flex-column">
        <div className="top title-margin-2">
          <ButtonTextBox
            placeHolder="Enter Company Name"
            className="title-margin-2"
            onClickBtn={onClickTextBox}
          />
          <ListBoxTypeA className="list-box" onChangeSelect={getListBoxValues} list={list} />
        </div>
        <StyleRoot>
          <div style={fades.fadeInUp} className="center flex-row">
            {companies.map((company, key) => (
              <CompanyCard key={key} company={company} className="" />
            ))}
          </div>
        </StyleRoot>
      </div>
    </DashboardPagesLayout>
  );
};

export default CompanyPage;
