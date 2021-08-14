import axios from 'axios';

export const axiosClient = axios.create({
    baseURL : process.env.API_URL
})

axiosClient.interceptors.response.use(res => {
    if(res && res.data){
        return res.data;
    }
})