import AxiosInstance from "../axiosInstance/AxiosInstance"

export const getUser = async() => {
    try{
        const response = await AxiosInstance.get("/user")
        console.log(response.data)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

export const getTransactions = async() => {
    try{
        const response = await AxiosInstance.get("/transactions")
        return response.data
    } catch(error) {
        console.log(error)
    }
}

export const getSavings = async() => {
    try{
        const response = await AxiosInstance.get("/savings")
        return response.data
    } catch(error) {
        console.log(error)
    }
}
export const getSpendings = async() => {
    try{
        const response = await AxiosInstance.get("/spendings")
        return response.data
    } catch(error) {
        console.log(error)
    }
}
export const getInvestments = async() => {
    try{
        const response = await AxiosInstance.get("/investments")
        return response.data
    } catch(error) {
        console.log(error)
    }
}