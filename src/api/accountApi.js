import axios from 'axios';
import { axiosClient } from './axiosClient';

class AccountApi {
    url = 'accounts'
    gets (){
        return axiosClient.get(this.url)
    }
    post(data){
        return axiosClient.post(this.url,data);
    }
    put(data){
        return axiosClient.put(this.url,data)
    }
    delete(){
        return axiosClient.delete(this.url)
    }
}

export default new AccountApi();