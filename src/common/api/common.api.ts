import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "'d0ce4cd8-d0d2-4152-99ad-f6e1407cb23f",
  },
});
