import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost/data/api/`,
  headers: {
    // Authorization: 'Bearer {token}'
  }
})

