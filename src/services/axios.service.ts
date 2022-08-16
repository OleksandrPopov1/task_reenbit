import axios from "axios";

import { baseURL } from "../constants";

export type AxiosRes<T> = Promise<AxiosRes<T>>;

const axiosService = axios.create({baseURL});

export {
    axiosService
}