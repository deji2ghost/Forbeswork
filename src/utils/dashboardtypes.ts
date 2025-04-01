export interface User {
    id: number;
    name: string;
    email: string;
    balance: number;
    currency: string;
  }
  
export interface Transaction {
    id: number;
    type: string;
    amount: number;
    date: string;
    status: string;
  }
  
export interface Investment {
    id: number;
    name: string;
    amount: number;
    returns: number;
    date: string;
  }
  
export interface Savings {
    id: number;
    amount: number;
    returns: number;
    date: string;
  }
  
export interface DashboardState {
    user: User | null;
    transactions: Transaction[];
    investments: Investment[];
    savings: Savings[];
  }