/* eslint-disable */
import { useCallback, useEffect, useState } from 'react';
import SalesReportCard from '../components/main/cards/SalesReportCard';
import YearlySalesCard from '../components/main/cards/YearlySalesCard';
import CompareYearsCard from '../components/main/cards/CompareYearsCard';
import NewMembersCard from '../components/main/cards/NewMembersCard';
import SupportTicketsCard from '../components/main/cards/SupportTicketsCard';
import React from 'react';
import { useDispatch} from 'react-redux';
import { OPEN_NAV_BAR_TEXT_BOX } from 'redux/actions/TextBoxActions';
import DashboardPagesLayout from 'components/layouts/DashBoardPagesLayout';

const DashboardPage = () => {

  const dispatch = useDispatch();

  dispatch({ type: OPEN_NAV_BAR_TEXT_BOX })


  const [y_values, setY_values] = useState([28, 38, 47, 60, 67, 76, 83, 58, 48, 40]);
  const [x_values, setX_values] = useState([
    'Day 1',
    'Day 2',
    'Day 3',
    'Day 4',
    'Day 5',
    'Day 6',
    'Day 7',
    'Day 8',
    'Day 9',
    'Day 10'
  ]);

  const [compares, setCompares] = useState([
    {
      title: 'TOTAL MEMBERS',
      nameA: 'LAST YEAR',
      valueA: '1457121',
      nameB: 'THIS YEAR',
      valueB: '1925024'
    },
    {
      title: 'TOTAL MEMBERS',
      nameA: 'LAST YEAR',
      valueA: '144657121',
      nameB: 'THIS YEAR',
      valueB: '1925024'
    },
    {
      title: 'TOTAL MEMBERS',
      nameA: 'LAST YEAR',
      valueA: '1457121',
      nameB: 'THIS YEAR',
      valueB: '1925024'
    },
    {
      title: 'TOTAL MEMBERS',
      nameA: 'LAST YEAR',
      valueA: '1457121',
      nameB: 'THIS YEAR',
      valueB: '14571121'
    },
    {
      title: 'TOTAL MEMBERS',
      nameA: 'LAST YEAR',
      valueA: '1457121',
      nameB: 'THIS YEAR',
      valueB: '1925024'
    }
  ]);

  const [persons, setPersons] = useState([
    {
      id: 'ds4512-dffdg542-fghfghfg213-dfgdfg65',
      name: 'Alisa Denver',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU'
    },
    {
      id: 'ds4512-dffdg542-fghfghfg213-dfgdfg65',
      name: 'Alisa Denver',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU'
    },
    {
      id: 'ds4512-dffdg542-fghfghfg213-dfgdfg65',
      name: 'Alisa Denver',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU'
    },
    {
      id: 'ds4512-dffdg542-fghfghfg213-dfgdfg65',
      name: 'Alisa Denver',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU'
    },
    {
      id: 'ds4512-dffdg542-fghfghfg213-dfgdfg65',
      name: 'Alisa Denver',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU'
    }
  ]);

  //product info

  let productInfo = [
    {
      productName: 'Apple',
      price: '200',
      imgUrl:
        'https://image.shutterstock.com/z/stock-photo-red-apple-fruit-isolated-on-white-background-1896616390.jpg',
      linkTo: `products/${'apple'}`
    },
    {
      productName: 'Apple',
      price: '200',
      imgUrl:
        'https://image.shutterstock.com/z/stock-photo-red-apple-fruit-isolated-on-white-background-1896616390.jpg',
      linkTo: `products/${'apple'}`
    },
    {
      productName: 'Apple',
      price: '200',
      imgUrl:
        'https://image.shutterstock.com/z/stock-photo-red-apple-fruit-isolated-on-white-background-1896616390.jpg',
      linkTo: `products/${'apple'}`
    },
    {
      productName: 'Apple',
      price: '200',
      imgUrl:
        'https://image.shutterstock.com/z/stock-photo-red-apple-fruit-isolated-on-white-background-1896616390.jpg',
      linkTo: `products/${'apple'}`
    }
  ];

  return (
    <DashboardPagesLayout>
      <div className=" dashboard-page">
        <SalesReportCard
          chart_x_values={x_values}
          chart_y_values={y_values}
          totalSales={'15,280.00'}
          totalRefunds={'12.00'}
          totalIncome={'$25,180.00'}
          className={'grid-left-first'}
        />
        <YearlySalesCard productInfo={productInfo} className={'grid-right-first'} />
        <CompareYearsCard compares={compares} className={'grid-left-second'} />
        <SupportTicketsCard personInfo={persons} className={'grid-right-second'} />

        <NewMembersCard
          lastYearAmount={'1,925,024'}
          thisYearAmount={'1,052,078'}
          className={'grid-bottom-thirth'}
        />
      </div>
    </DashboardPagesLayout>
  );
};

export default DashboardPage;
