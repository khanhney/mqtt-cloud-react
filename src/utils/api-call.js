import Axios from "axios";
import { BASE_URL } from './../constants/config';


// Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
/**
 * cách lấy data từ headers
 */
export const apiCall = (endPoint, method = 'GET', body, header = {}) => {
    console.log(`${BASE_URL}${endPoint}`);
    return Axios({
        method: method,
        url: `${BASE_URL}${endPoint}`,
        data: body,
        headers: header
    }).catch(err => console.log(err))
}
