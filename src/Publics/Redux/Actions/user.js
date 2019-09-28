import Axios from 'axios';
Axios.defaults.headers.common['authorization'] = 'soul';

export const login = body => {
  return {
    type: 'POST_LOGIN',
    payload: Axios.post(
      `https://upgan.herokuapp.com/auth/login
    `,
      body,
    ),
  };
};

export const register = body => {
  return {
    type: 'POST_REGISTER',
    payload: Axios.post(
      `https://upgan.herokuapp.com/auth/register
    `,
      body,
    ),
  };
};

export const getUser = id => {
  return {
    type: 'GET_USER',
    payload: Axios.get(
      `https://upgan.herokuapp.com/auth/getus/${id}
    `,
    ),
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
