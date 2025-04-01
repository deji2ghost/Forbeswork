import { useQuery } from '@tanstack/react-query';
import { getSavings } from '../api/calls/calls';

const GetSavings = () => {

  return useQuery({
    queryKey: ["savings"],
    queryFn: getSavings,
  });
}

export default GetSavings