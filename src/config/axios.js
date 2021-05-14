import axios from 'axios';

const token = localStorage.getItem('token') || '';
//console.log( token );
const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api', //process.env.API_URL,
    headers:{
        'x-token': token
    }
});

export default axiosClient;