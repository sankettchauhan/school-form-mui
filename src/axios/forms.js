import axios from "axios";

export const createForm = (data) =>
  axios.post(`${process.env.REACT_APP_API_URL}/form`, data);
