import {environment} from "../../environments/environment";

const {API} = environment

export const urls = {
  movies:`${API}/movies`,
  genre:`${API}/genre`
}
