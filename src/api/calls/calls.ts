import axios from "axios"
import AxiosInstance from "../axiosInstance/AxiosInstance"

export const getUser = async() => {
    try{
        const response = await AxiosInstance.get("/user")
        return response.data
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
        const response = await AxiosInstance.get("/transactions")
        return response.data
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
        const response = await AxiosInstance.get("/savi/ngs")
        return response.data
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
        const response = await AxiosInstance.get("/spendings")
        return response.data
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
        const response = await AxiosInstance.get("/investments")
        return response.data
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