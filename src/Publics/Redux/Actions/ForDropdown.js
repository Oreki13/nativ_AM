import Axios from "axios";

export const getBranch = () => {
  return {
    type: "GET_BRANCH",
    payload: Axios.get(`http://localhost:8080/store/branch`)
  };
};
