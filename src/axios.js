import axios from 'axios'

const instance = axios.create({baseURL:'https://localhost:44335/api/'})
export default instance