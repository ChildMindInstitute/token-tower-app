import axios from 'axios';

const authenicate = values => axios.post('http://35.202.197.163/api/users/authenticate', values);
const register = values => axios.post('http://35.202.197.163/api/users', values);
const forgotPassword = values => axios.post('http://35.202.197.163/api/users/fogotPassword', values);

export default {
  authenicate,
  register,
  forgotPassword
};
