import axios from "axios";
import UserAPI from "./UserAPI";
// import { BACKEND_BASE_URL } from 'react-native-dotenv';
import CategoryAPI from "./catgirApi";
console.log("axiossssssssssss", axios);
export default class {
  protected $axios: any;
  constructor() {
    this.$axios = axios.create({
      url: "http://bsamat.com/demo/wonder_hand/public/api"
    });
  }
  user() {
    return new UserAPI(this.$axios);
  }
  category() {
    return new CategoryAPI(this.$axios);
  }
}
