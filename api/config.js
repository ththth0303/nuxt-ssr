import axios from "axios"

const apiUrl = 'http://localhost:3001'

axios.defaults.baseURL = apiUrl;

export default axios;