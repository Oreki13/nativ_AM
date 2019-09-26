import {combineReducers} from 'redux';
import dataList from './dataList';
import user from './user';
import prodacts from './prodacts';
// import dropdown from "./forDropdown";
// import cart from "./cart";
// import whislist from "./whislist";
// import transaction from "./transaction";

const appReducer = combineReducers({
  dataList,
  user,
  prodacts,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

// const rootReducer = combineReducers({
//   dataList,
//   prodacts,
//   user,
// });

export default rootReducer;
