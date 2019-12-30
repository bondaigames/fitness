import axios from "axios";
import * as firebaseContants from "./firebase-constant";

const useFirebase = () => {
  return {
    axiosFireBase: axios.create({
      baseURL: "https://fitness-f191d.firebaseio.com/"
    }),
    constants: firebaseContants
  };
};
// const instance = axios.create({
//   baseURL: "https://fitness-f191d.firebaseio.com/"
// });

export default useFirebase;
