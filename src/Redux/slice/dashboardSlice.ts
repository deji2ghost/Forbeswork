import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DashboardState, Transaction } from "../../utils/dashboardtypes";
import {
  getInvestments,
  getSavings,
  getSpendings,
  getTransactions,
  getUser,
} from "../../api/calls/calls";
import { toast } from "sonner";

const initialState: DashboardState = {
  user: null,
  transactions: {
    data: [], 
    currentPage: 1,
    totalPages: 1,
    paginatedData: [], 
    pageSize: 10, 
  },
  investments: [],
  savings: [],
  spendings: [],
  modalOpen: false,
  modalType: null,
  formError: "",
  amount: null,
  userLoading: false,
  transactionsLoading: false,
  savingsLoading: false,
  investmentsLoading: false,
  spendingsLoading: false,

  userError: "",
  transactionsError: "",
  savingsError: "",
  investmentsError: "",
  spendingsError: "",
};

export const fetchUser = createAsyncThunk("dashboard/fetchUser", async (_, { rejectWithValue }) => {
  try {
    const response = await getUser();
    return response;
  } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log("FetchUser Error:", error);
    return rejectWithValue(error.message || "Failed to fetch user data");
  }
});

export const fetchTransactions = createAsyncThunk("dashboard/fetchTransactions", async (_, { rejectWithValue }) => {
  try {
    const response = await getTransactions();
    return response;
  } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
    return rejectWithValue(error.message || "Failed to fetch transactions");
  }
});

export const fetchSavings = createAsyncThunk("dashboard/fetchSavings", async (_, { rejectWithValue }) => {
  try {
    const response = await getSavings();
    return response;
  } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
    console.log(error)
    return rejectWithValue(error.message || "Failed to fetch savings");
  }
});

export const fetchInvestments = createAsyncThunk("dashboard/fetchInvestments", async (_, { rejectWithValue }) => {
  try {
    const response = await getInvestments();
    return response;
  } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
    return rejectWithValue(error.message || "Failed to fetch investments");
  }
});

export const fetchSpendings = createAsyncThunk("dashboard/fetchSpendings", async (_, { rejectWithValue }) => {
  try {
    const response = await getSpendings();
    return response;
  } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
    return rejectWithValue(error.message || "Failed to fetch spendings");
  }
});


const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAmount(state, action) {
      state.amount = action.payload;
      state.formError = "";
    },
    setFormError(state, action) {
      state.formError = action.payload;
    },
    getUserData(_state, action) {
      return action.payload;
    },
    setModalOpen(state, action) {
      state.modalOpen = action.payload.open;
      state.modalType = action.payload.type;
    },
    updateBalance(state, action) {
      const { amount, type } = action.payload;

      state.formError = "";

  if (!amount) {
    state.formError = "You must put an amount to deposit or withdraw.";
    return;
  }

  if (amount > 2000) {
    state.formError =
      type === "deposit"
        ? "Amount must be less than 2000."
        : "Can't withdraw more than 2000.";
    return;
  }

      if (state.user) {
        const transaction = {
          id: new Date().toISOString(),
          type,
          amount,
          date: new Date().toISOString(),
        };
    
        if (type === "deposit") {
          state.user.balance += amount;
          state.user.spendings += amount;
          toast.success(`₦${amount} has been deposited ✅`);
        } else if (type === "withdraw") {
          if (!amount) {
            state.formError = "You must put an amount to deposit or withdraw.";
            return;
          }
          if (state.user.balance < amount) {
            state.formError = "Insufficient balance for withdrawal.";
            return;
          }
          state.user.balance -= amount;
          state.user.spendings -= amount;
          toast.success(`₦${amount} has been withdrawn ✅`);
        } else if (type === "Save") { 
          if (amount > 2000) {
            state.formError = "You cannot save more than ₦2000 at once.";
            return;
          }
          if (state.user.spendings >= amount) {
            state.user.spendings -= amount;
            state.user.savings += amount;
            state.savings.push(action.payload);
            toast.success(`₦${amount} has been saved ✅`);
          } else {
            console.log("Not enough spendings to save.");
          }
        }

        state.transactions.data.unshift(transaction);
        state.transactions.totalPages = Math.ceil(state.transactions.data.length / state.transactions.pageSize);
        state.transactions.paginatedData = state.transactions.data.slice(0, state.transactions.pageSize);
      }
    },
    paginateTransactions(state, action) {
      const { page } = action.payload;
      state.transactions.currentPage = page;

      const startIndex = (page - 1) * state.transactions.pageSize;
      const endIndex = startIndex + state.transactions.pageSize;

      state.transactions.paginatedData = state.transactions.data.slice(
        startIndex,
        endIndex
      );
    },
  },
  extraReducers: (builder) => {
    // Fetch user data
    builder
    .addCase(fetchUser.pending, (state) => {
      state.userLoading = true;
      state.userError = ""; // Reset error when fetching starts
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.userLoading = false;
      state.user = action.payload;
    })
    .addCase(fetchUser.rejected, (state, action) => {
      state.userLoading = false;
      state.userError = action.payload as string;
    });

  // Fetch transactions
  builder
    .addCase(fetchTransactions.pending, (state) => {
      state.transactionsLoading = true;
      state.transactionsError = "";
    })
    .addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactionsLoading = false;
      state.transactions.data = action.payload.sort(
        (a: Transaction, b: Transaction) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      state.transactions.totalPages = Math.ceil(
        state.transactions.data.length / state.transactions.pageSize
      );
      state.transactions.paginatedData = state.transactions.data.slice(
        0,
        state.transactions.pageSize
      );
    })
    .addCase(fetchTransactions.rejected, (state, action) => {
      state.transactionsLoading = false;
      state.transactionsError = action.payload as string;
    });

  // Fetch savings
  builder
    .addCase(fetchSavings.pending, (state) => {
      state.savingsLoading = true;
      state.savingsError = "";
    })
    .addCase(fetchSavings.fulfilled, (state, action) => {
      state.savingsLoading = false;
      state.savings = action.payload;
    })
    .addCase(fetchSavings.rejected, (state, action) => {
      state.savingsLoading = false;
      state.savingsError = action.payload as string;
    });

  // Fetch investments
  builder
    .addCase(fetchInvestments.pending, (state) => {
      state.investmentsLoading = true;
      state.investmentsError = "";
    })
    .addCase(fetchInvestments.fulfilled, (state, action) => {
      state.investmentsLoading = false;
      state.investments = action.payload;
    })
    .addCase(fetchInvestments.rejected, (state, action) => {
      state.investmentsLoading = false;
      state.investmentsError = action.payload as string;
    });

  // Fetch spendings
  builder
    .addCase(fetchSpendings.pending, (state) => {
      state.spendingsLoading = true;
      state.spendingsError = "";
    })
    .addCase(fetchSpendings.fulfilled, (state, action) => {
      state.spendingsLoading = false;
      state.spendings = action.payload;
    })
    .addCase(fetchSpendings.rejected, (state, action) => {
      state.spendingsLoading = false;
      state.spendingsError = action.payload as string
    });
  },
});

export const { getUserData, setModalOpen, updateBalance, paginateTransactions, setAmount, setFormError } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
