import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../api/calls/calls';

const GetTransactions = () => {

  return useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });
}

export default GetTransactions
