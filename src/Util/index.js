import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/fashionapp"
})
const addJwt = (jwt) => {
    axiosInstance.interceptors.request.use((config) => {
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${jwt}`
            }
        }
    })
}
export { addJwt };
export default axiosInstance;