import Axios from 'axios';
Axios.defaults.headers.common['authorization'] = 'soul';

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: Axios.get(
      `http://192.168.100.30:8080/store/category
    `,
    ),
  };
};
