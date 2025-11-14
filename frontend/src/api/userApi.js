import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const getProfile = (token) =>
  axios.get(`${API_URL}/profile`, {
    headers: { Authorization: token },
  });
