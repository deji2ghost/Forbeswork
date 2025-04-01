import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/calls/calls';

const GetUser = () => {

  return useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });
}

export default GetUser
