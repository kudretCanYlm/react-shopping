import axios from 'axios';

class BaseApiClass {
  constructor() {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.baseURL = 'https://localhost:44369';
    this.timeOut = 10000;
  }

  BaseApi() {
    return axios.create({
      baseURL: this.baseURL,
      timeout: this.timeOut,
      headers: { Authorization: 'Bearer ' + this.token, 'Content-Type': 'application/json' }
    });
  }
}

export default BaseApiClass;
