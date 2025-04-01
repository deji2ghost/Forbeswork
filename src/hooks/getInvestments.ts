import { useQuery } from '@tanstack/react-query';
import { getInvestments } from '../api/calls/calls';

const GetInvestments = () => {

  return useQuery({
    queryKey: ["investments"],
    queryFn: getInvestments,
  });
}

export default GetInvestments