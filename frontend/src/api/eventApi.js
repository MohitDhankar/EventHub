import axios from "axios";

const API_URL = "http://localhost:5000/api/events";

export const getEvents = () => axios.get(API_URL);

export const createEvent = (eventData, token) =>
  axios.post(API_URL, eventData, {
    headers: { Authorization: token },
  });
