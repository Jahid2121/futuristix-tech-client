import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBrands = () => {
    const axiosPublic = useAxiosPublic()
  const {data: brands = []} = useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
        const res = await axiosPublic.get('/brands');
        return res.data;
    }
  })
  return [brands]
};

export default useBrands;