import axios from "axios";

const apiurl = "https://api.rawg.io/api";

const fetcher = axios.create({
  baseURL: apiurl,
  params: {
    key: process.env.RAWG_API_KEY,
  },
});

export interface IAPIResponse<Result = any> {
  count: number;
  next: string;
  previous: string;
  results: Result;
}

export default fetcher;
