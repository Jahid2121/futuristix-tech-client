import axios from "axios";

const axiosPublic= axios.create({
    baseURL: 'https://futuristix-tech-server.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;