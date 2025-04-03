import axios from "axios"

export const getUser = async() => {
    try{
        const response = await axios.get("/data.json")
        return response.data.user
    } catch(error) {
        if (axios.isAxiosError(error)) {
      
            const errorMessage =
              error.response?.data?.message || 
              error.message ||
              "Failed to fetch user data";
      
            throw new Error(errorMessage);
          } else {
            throw new Error("An unexpected error occurred");
          }
    }
}

export const getTransactions = async() => {
    try{
        const response = await axios.get("/data.json")
        return response.data.transactions
    } catch(error) {
        if (axios.isAxiosError(error)) {
      
            const errorMessage =
              error.response?.data?.message || 
              error.message ||
              "Failed to fetch user data";
      
            throw new Error(errorMessage);
          } else {
            throw new Error("An unexpected error occurred");
          }
    }
}

export const getSavings = async() => {
    try{
        const response = await axios.get("/data.json")
        return response.data.savings
    } catch(error) {
        if (axios.isAxiosError(error)) {
      
            const errorMessage =
              error.response?.data?.message || 
              error.message ||
              "Failed to fetch user data";
      
            throw new Error(errorMessage);
          } else {
            throw new Error("An unexpected error occurred");
          }
    }
}
export const getSpendings = async() => {
    try{
        const response = await axios.get("/data.json")
        return response.data.spendings
    } catch(error) {
        if (axios.isAxiosError(error)) {
      
            const errorMessage =
              error.response?.data?.message || 
              error.message ||
              "Failed to fetch user data";
      
            throw new Error(errorMessage);
          } else {
            throw new Error("An unexpected error occurred");
          }
    }
}
export const getInvestments = async() => {
    try{
        const response = await axios.get("/data.json")
        return response.data.investment
    } catch(error) {
        if (axios.isAxiosError(error)) {
      
            const errorMessage =
              error.response?.data?.message || 
              error.message ||
              "Failed to fetch user data";
      
            throw new Error(errorMessage);
          } else {
            throw new Error("An unexpected error occurred");
          }
    }
}