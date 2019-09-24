import {combineReducers} from 'redux';
import dataList from './dataList';
// import user from "./user";
import prodacts from './prodacts';
// import dropdown from "./forDropdown";
// import cart from "./cart";
// import whislist from "./whislist";
// import transaction from "./transaction";

const rootReducer = combineReducers({
  dataList,
  prodacts,
});

export default rootReducer;
