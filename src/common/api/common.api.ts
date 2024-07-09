import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "360b05d5-5c97-4915-ad7f-12a66e5d8c68",
  },
});
