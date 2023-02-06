import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/';

let axiosInstance = axios.create({
	baseURL: baseURL,
	// proxy: { host: 'http://proxy-tct', port: 3128 },
	timeout: 500,
	headers: {
		Authorization: '*',
		'Content-Type': 'application/json',
		accept: 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
	}
});
export default axiosInstance;
