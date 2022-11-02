import axios from 'axios';

const BASE_URL = 'https://localhost:44369';
const TIME_OUT = 3000;
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjM4N0U2Mjc4RDhFMDYwODNEODEzMzU4NzYyRTBBQzYzIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjY3Mzc0NTkwLCJleHAiOjE2NjczNzU3OTAsImlhdCI6MTY2NzM3NDU5MH0.6lPUUIntA_HDyZMH_I-CshRyoKN_QM6RoFT76sRZLCQ';

const BaseApi = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: { Authorization: 'Bearer ' + TOKEN }
});

export default BaseApi;
