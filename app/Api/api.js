import axios from 'axios';

const authenicate = values => axios.post('http://localhost:3000/api/users/authenticate', values);
const register = values => axios.post('http://localhost:3000/api/users', values);
const forgotPassword = values => axios.post('http://localhost:3000/api/users/fogotPassword', values);

export default {
  authenicate,
  register,
  forgotPassword
};
