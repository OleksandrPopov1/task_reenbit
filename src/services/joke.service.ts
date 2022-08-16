import {AxiosRes, axiosService} from "./axios.service";

import {urls} from "../constants";
import {IJoke} from "../interfaces";

export const jokeService = {
    gerRandomJoke: (): AxiosRes<IJoke> => axiosService.get(urls.jokes)
}