import axios from "axios";

const REST_API_ADVERTISEMENT_URL = "http://localhost:8080/api/advertisements/";

export const createAdvertisement = (advertisement) => {
  return axios.post(REST_API_ADVERTISEMENT_URL, advertisement);
}

export const getAdvertisementsByUserName = (userName) => {
  return axios.get(REST_API_ADVERTISEMENT_URL + userName);
}

export const getAdvertisement = () => {
  return axios.get(REST_API_ADVERTISEMENT_URL);
}
;