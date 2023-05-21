import { io } from 'socket.io-client';
//import WebSocket from "ws"

const socketBaseUrl = 'wss://localhost:44369/chat/connectSocket';
export const connectMessageSocket = () => {
  var token =
    'OAEvE7VUdqIkH+vO2/NqsWLjSrMiUcBKJsSR/9UBK2+Es515Y3iGmNJigw3MrRXB5ZNNbVWeDr6+SQIaSAc5dNLYMhGOD9oXNv0eofedQJ/oHnvEn/XzoGppk6KmibfDmgUiniqp2Pa/YFr2abduiVDT0GElddlJNUAlYv/6Sh24bIo9FZOcPy/PIicHIm0WR59OTV/0coSeBzy66e4nETeh0R2B3DbYZ/c/XFNYUFl6j5QL1SFlH93jMw5FwDWRITif4GgqBN5efs4Hpo6ODhopsIBLFaZdSIesjZr5eGJs1S+CC8zDmChcZQeBcQ6A';

  var headers = {
    Authorization: 'Bearer TOKEN',
    'x-ms-client-request-id': 'CLIENT_ID',
    token: token
  };

  var socket = new WebSocket(socketBaseUrl + '?tokenParam=' + token);
  // connection.extensions={
  //     "Headers":{
  //         "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM4N0U2Mjc4RDhFMDYwODNEODEzMzU4NzYyRTBBQzYzIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjY1ODIzMjcyLCJleHAiOjE2NjU4MjQ0NzIsImlhdCI6MTY2NTgyMzI3Mn0.kGDZVJXzE72mgBTfHMPArfqBEWeMKmMH_DrmTGY9W5w"
  //     }
  // }

  socket.onopen = (e) => {
    console.log('connected');
    console.log(e);
  };

  socket.onmessage = (e) => {
    console.log(e.data);
  };

  socket.onclose = (e) => {
    console.log('closed!');
  };

  socket.onerror = (e) => {
    console.log('error!');
  };
};
