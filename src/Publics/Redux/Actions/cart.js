import Axios from 'axios';
Axios.defaults.headers.common['authorization'] = 'soul';

export const getCart = id => {
  return {
    type: 'GET_CART',
    payload: Axios.get(
      `https://upgan.herokuapp.com/cart/${id}
    `,
    ),
  };
};

export const postCart = (id, id_item) => {
  return {
    type: 'POST_CART',
    payload: Axios.post(
      `https://upgan.herokuapp.com/cart/${id}/${id_item}
      `,
    ),
  };
};

export const deleteCart = (id, id_item) => {
  return {
    type: 'DELETE_CART',
    payload: Axios.delete(
      `https://upgan.herokuapp.com/cart/${id}/${id_item}
      `,
    ),
  };
};

// http://192.168.100.30:8080
