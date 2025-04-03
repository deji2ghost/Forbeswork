export interface User {
  id: number;
  name: string;
  email: string;
  balance: number;
  currency: string;
  savings: number;
  spendings: number;
  investments: number;
}

export interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
}

export interface TransactionProps {
  data: Transaction[]; // Store all transactions here
  currentPage: number;
  totalPages: number;
  paginatedData: Transaction[]; // This will store the current page transactions
  pageSize: number;
}

export interface Investment {
  id: number;
  name: string;
  amount: number;
  returns: number;
  date: string;
}

export interface Savings {
  id: string;
  amount: number;
  type: string;
  date: string;
}

export interface DashboardState {
  user: User | null;
  transactions: TransactionProps;
  investments: Investment[];
  savings: Savings[];
  spendings: unknown[];
  modalOpen: boolean;
  modalType: string | null;
  formError: string;
  amount: number | null;
  userLoading: boolean;
  transactionsLoading: boolean;
  savingsLoading: boolean;
  investmentsLoading: boolean;
  spendingsLoading: boolean;
  userError?: string,
  transactionsError?: string,
  savingsError?: string,
  investmentsError?: string,
  spendingsError?: string,
}
