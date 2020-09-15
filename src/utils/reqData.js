import Axios from 'axios';

export const getMenu = () => {
  return Axios.get('http://192.168.0.4:3100/?page=1&limit=6');
};

export const getMenuSearch = (menu_name) => {
  return Axios.get(`http://192.168.0.4:3100/?menu_name=${menu_name}&page=1&limit=6`);
};
