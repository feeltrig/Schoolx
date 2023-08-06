import Axios from "axios";

let config = {
  baseURL: "http://localhost:3000/api/",
  timeout: 1000,
  headers: {"X-Custom-Header": "foobar"},
};

config.headers.Authorization = "Bearer awdawdawd";

const instance = Axios.create(config);

export default instance;
