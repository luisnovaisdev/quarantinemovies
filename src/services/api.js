import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f5ff455cd31c56fc011823480d5a684a'
  }
})
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = "f5ff455cd31c56fc011823480d5a684a";
  return config;
});

export default api;