import Axios from 'axios';
Axios.defaults.headers.common['authorization'] = 'soul';

export const getCart = id => {
  return {
    type: 'GET_CART',
    payload: Axios.get(
      `http://192.168.100.30:8080/cart/${id}
    `,
    ),
  };
};

export const postCart = (id, id_item) => {
  return {
    type: 'POST_CART',
    payload: Axios.post(
      `http://192.168.100.30:8080/cart/${id}/${id_item}
      `,
    ),
  };
};

export const deleteCart = (id, id_item) => {
  return {
    type: 'DELETE_CART',
    payload: Axios.delete(
      `http://192.168.100.30:8080/cart/${id}/${id_item}
      `,
    ),
  };
};

// http://192.168.100.30:8080
