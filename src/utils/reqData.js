import Axios from 'axios';

export const getMenu = () => {
  return Axios.get('http://192.168.0.5:3100/?page=1&limit=6');
};
