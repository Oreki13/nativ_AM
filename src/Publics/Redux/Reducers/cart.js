const initialState = {
  cartList: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false,
};

const Cart = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case 'GET_CART_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'GET_CART_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_CART_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        cartList: action.payload.data,
      };
    case 'DELETE_CART_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'DELETE_CART_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'DELETE_CART_FULFILLED':
      const dataAfterEdit = state.cartList.result.filter(
        item => item.id_item != action.payload.data.massage,
      );
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        cartList: dataAfterEdit,
      };

    default:
      return state;
  }
};
export default Cart;
