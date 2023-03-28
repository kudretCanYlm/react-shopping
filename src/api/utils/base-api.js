import axios from 'axios';

const BASE_URL = 'https://localhost:44369';
const TIME_OUT = 10000;
const TOKEN =
  'OAEvE7VUdqIkH+vO2/NqsWLjSrMiUcBKJsSR/9UBK2+Es515Y3iGmNJigw3MrRXB5ZNNbVWeDr6+SQIaSAc5dNLYMhGOD9oXNv0eofedQJ/oHnvEn/XzoGppk6KmibfDmgUiniqp2Pa/YFr2abduiVDT0GElddlJNUAlYv/6Sh03kFNCksjSpmUl1UbE7Rig63pNqDtiSlYTCp35sjXFjl1fbBrb2RyrK74+nmkeblTR3D8C4f9SOePmd9ZZLNVZWvCyhWmfTSNhyaipfHb6j++OZ/K8x4HcFBmf6PAgIaq6JgIAax2pz0oPfd6k9Qpd';
const BaseApi = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: { Authorization: 'Bearer ' + TOKEN }
});

export default BaseApi;
