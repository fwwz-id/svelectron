import axios from "axios";
export interface IAPIResponse<Result = any> {
  count: number;
  next: string;
  previous: string;
  results: Result;
}

const apiurl = {
  subdomain: "https://api.rawg.io/api",
  maindomain: "https://rawg.io/api",
};

const fetchsub = axios.create({
  baseURL: apiurl.subdomain,
  params: {
    key: process.env.RAWG_API_KEY,
  },
});

const fetchmain = axios.create({
  baseURL: apiurl.maindomain,
  params: {
    key: process.env.RAWG_API_KEY,
  },
});

export { fetchsub, fetchmain };
