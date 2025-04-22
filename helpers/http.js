import axios from "axios";

const BACKEND_URL = "https://drugsapp-1f8c8-default-rtdb.firebaseio.com";

export const storeDrug = async (drugData) => {
  const respone = await axios.post(`${BACKEND_URL}/drugs.json`, drugData);
  const id = respone.data.name; // id of the new item added
  return id;
};

export const fetchDrugs = async () => {
  const response = await axios.get(`${BACKEND_URL}/drugs.json`);
  const drugs = [];

  for (const key in response.data) {
    // each key is a string
    const drug = response.data[key];

    drugs.push({ ...drug , id: key });
  }

  return drugs;
};

export const updateDrug = (id, drugData) => {
  return axios.put(`${BACKEND_URL}/drugs/${id}.json`, drugData);
};

export const deleteDrug = (id) => {
  return axios.delete(`${BACKEND_URL}/drugs/${id}.json`);
};
