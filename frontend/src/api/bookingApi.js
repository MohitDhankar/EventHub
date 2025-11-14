import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings";

export const bookEvent = (eventId, seats, token) =>
  axios.post(
    API_URL,
    { eventId, seats },
    { headers: { Authorization: token } }
  );

export const getUserBookings = (token) =>
  axios.get(`${API_URL}/my-bookings`, {
    headers: { Authorization: token },
  });
