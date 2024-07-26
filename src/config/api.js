// import axios from "axios";
// import { url } from "./urlConfig";
// import { getRequestHeaders } from "../utils/helper";

// export const endPointMapping = {
//   generateOtp: "/v2/registration/aadhaar/generateOtp",
// };

// export const getCall = (endPointName, queryParams = null) => {
//   let URL = url + endPointMapping[endPointName];
//   if (queryParams) {
//     URL = `${URL}/${queryParams}`;
//   }
//   return axios.get(URL, {
//     headers: getRequestHeaders(),
//   });
// };

// export const postCall = (endPointName, payload, queryParams = null) => {
//   const TOKEN = localStorage.getItem("user_token");
//   const accountSelected = localStorage.getItem("advertiser_account_id");
//   let URL = url + endPointMapping[endPointName];
//   if (queryParams) {
//     // TODO : use extra info
//     URL = `${URL}/${queryParams}`;
//   }
//   return axios.post(
//     URL,
//     {
//       ...payload.data,
//     },
//     {
//       headers: getRequestHeaders(),
//     }
//   );
// };

// export const putCall = (endPointName, payload, queryParams = null) => {
//   let URL = url + endPointMapping[endPointName];
//   if (queryParams) {
//     // TODO : use extra info
//     URL = `${URL}/${queryParams}`;
//   }
//   return axios.put(
//     URL,
//     {
//       ...payload.data,
//     },
//     {
//       headers: getRequestHeaders(),
//     }
//   );
// };

// /* new implementation */
// export const postCall2 = (endPointName, payload, queryParams = null) => {
//   let URL = url + endPointMapping[endPointName];
//   if (queryParams) {
//     URL = `${URL}/${queryParams}`;
//   }
//   return axios.post(
//     URL,
//     {
//       ...payload.data,
//     },
//     {
//       headers: payload.header,
//     }
//   );
// };

// export const getCall2 = (endPointName, payload, queryParams = null) => {
//   let URL = url + endPointMapping[endPointName];
//   if (queryParams) {
//     // TODO : use extra info
//     URL = `${URL}/${queryParams}`;
//   }
//   return axios.get(URL, {
//     headers: payload.header,
//   });
// };

// export const putCall2 = (endPointName, payload, queryParams = null) => {
//   let URL = url + endPointMapping[endPointName];
//   if (queryParams) {
//     // TODO : use extra info
//     URL = `${URL}/${queryParams}`;
//   }
//   return axios.put(
//     URL,
//     {
//       ...payload.data,
//     },
//     {
//       headers: payload.header,
//     }
//   );
// };

// export const postCallMock = (url, payload) => {
//   return axios.post(
//     url,
//     {
//       ...payload.data,
//     },
//     {
//       headers: payload.header,
//     }
//   );
// };

// export const getCallMock = (url, payload) => {
//   return axios.get(
//     url,
//     {
//       ...payload.data,
//     },
//     {
//       headers: payload.header,
//     }
//   );
// };

// export const headCall = (url) => {
//   return axios
//     .head(url)
//     .then((response) => {
//       return response;
//     })
//     .catch((error) => {
//       return false;
//     });
// };

// export const getCall3 = (endPointName, payload, queryParams = null) => {
//   let URL = url + endPointMapping[endPointName];
//   if (queryParams) {
//     // TODO : use extra info
//     URL = `${URL}${queryParams}`;
//   }
//   return axios.get(URL, {
//     headers: payload.header,
//   });
// };
