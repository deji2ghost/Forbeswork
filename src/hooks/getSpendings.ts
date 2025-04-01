import { useQuery } from '@tanstack/react-query';
import { getSpendings } from '../api/calls/calls';

const GetSpendings = () => {

  return useQuery({
    queryKey: ["spendings"],
    queryFn: getSpendings,
  });
}

export default GetSpendings