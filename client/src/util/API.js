// API UTILITY
// dependencies
import axios from "axios";

export default {
  viewAPI: function (input) {
    return axios.get("/api/view/all").then((res) => res);
  },
};
