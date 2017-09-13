import axios from 'axios';

const authenicate = values => axios.post('http://localhost:3000/api/users/authenticate', values);

export default {
  authenicate
};
