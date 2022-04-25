import axios from 'axios';

const baseURL = 'http://localhost:4000'

const Data = axios.create({
    baseURL: baseURL
});
export default Data;