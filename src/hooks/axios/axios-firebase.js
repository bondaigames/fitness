import axios from "axios";
import * as firebaseContants from "./firebase-constant";

const useFirebase = () => {
  return {
    axiosFireBase: axios.create({
      //baseURL: "https://fitness-f191d.firebaseio.com/"
      baseURL: "https://us-central1-fitness-f191d.cloudfunctions.net/api/"
    }),
    constants: firebaseContants
  };
};
// const instance = axios.create({
//   baseURL: "https://fitness-f191d.firebaseio.com/"
// });

export default useFirebase;
