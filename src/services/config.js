import axios from 'axios';
import { conf } from '../config';

export function service() {
  return axios.create({
    baseURL: conf.BASE_API_URL
  });
}
