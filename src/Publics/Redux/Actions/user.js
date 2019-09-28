import Axios from 'axios';
Axios.defaults.headers.common['authorization'] = 'soul';

export const login = body => {
  return {
    type: 'POST_LOGIN',
    payload: Axios.post(
      `http://192.168.100.30:8080/auth/login
    `,
      body,
    ),
  };
};

export const register = body => {
  return {
    type: 'POST_REGISTER',
    payload: Axios.post(
      `http://192.168.100.30:8080/auth/register
    `,
      body,
    ),
  };
};

export const getUser = id => {
  return {
    type: 'GET_USER',
    payload: Axios.get(
      `http://192.168.100.30:8080/auth/getus/${id}
    `,
    ),
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
