import axios from "axios";

export const req = async ({ url, method, payload }) => {
  let reqObj = {
    url: url,
    method: method,
    headers: {
      'Content-Type': 'application/json',
    }
  }
  if (payload) {
    reqObj.data = payload;
  }
  let response = await axios(reqObj);
  return response;
}