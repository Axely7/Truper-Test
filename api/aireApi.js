import axios from 'axios';

const aireApi = axios.create({
    baseURL: 'https://api.datos.gob.mx/v1'
});

export default aireApi;