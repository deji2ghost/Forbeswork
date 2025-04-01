import axios from "axios";
import { BaseUrl } from "../baseUrl/baseurl";


console.log("BaseUrl:", BaseUrl);

const AxiosInstance = axios.create({
    baseURL: BaseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default AxiosInstance;