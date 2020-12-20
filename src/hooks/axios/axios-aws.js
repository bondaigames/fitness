import axios from "axios";
import * as contants from "./firebase-constant";

const useApi = () => {
  return {
    axiosApi: axios.create({
      //baseURL: "https://fitness-f191d.firebaseio.com/"
      // baseURL: "http://localhost:5000"
      //baseURL: "https://api.codesmt.com:5000"
      baseURL: "https://ftnserver.herokuapp.com/"
    }),
    constants: contants
  };
};
// const instance = axios.create({
//   baseURL: "https://fitness-f191d.firebaseio.com/"
// });

export default useApi;
