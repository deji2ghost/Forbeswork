
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { queryClientConfig } from '../../../utils/config/QueryClientConfig';

const Queryprovider = ({children}: {children: ReactNode}) => {
    const queryClient = new QueryClient(queryClientConfig);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Queryprovider
