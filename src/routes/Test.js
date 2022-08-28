/* eslint-disable */
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import ProjectCard from 'components/main/cards/ProjectCard';

export const Test = () => {
  const [img, setImg] = useState('https://c.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif');

  useEffect(() => {
    var data = qs.stringify({
      OwnerId: '0b382dfd-9660-444f-9f2c-0bf9b65cb3d4',
      ImageType: '0'
    });
    var config = {
      method: 'post',
      url: 'https://localhost:44369/media/getSingleGlobalImage',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjBFMDI5MUQ3NjBDQjA0QUZDMzhFNjJCNDMxRDg3QTNEIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjYxNjIzMjc0LCJleHAiOjE2NjE2MjQ0NzQsImlhdCI6MTY2MTYyMzI3NH0.gtz140GOoSQe3eWhge1oxjtjHSQeHce-uyjw95ZZXeU',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setImg(response.data.ImageData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="test">
      {[...Array(20)].map((x) => (
        <ProjectCard project={{ imgUrl: img }} />
      ))}
    </div>
  );
};
