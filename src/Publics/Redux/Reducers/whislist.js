const initialState = {
  whislistList: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false,
};

const whislist = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case 'GET_WHISLIST_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'GET_WHISLIST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_WHISLIST_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        whislistList: action.payload.data.result,
      };
    case 'DELETE_WHISLIST_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'DELETE_WHISLIST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'DELETE_WHISLIST_FULFILLED':
      console.log(action.payload.data.massage);

      const dataAfterEdit = state.whislistList.filter(
        item => item.id_item != action.payload.data.massage,
      );
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        whislistList: dataAfterEdit,
      };
    default:
      return state;
  }
};
export default whislist;
