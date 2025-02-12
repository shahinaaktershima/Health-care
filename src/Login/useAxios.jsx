import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://health-care-server-wine.vercel.app'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;