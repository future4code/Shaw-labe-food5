import axios from "axios";
import { BaseUrl } from '../constants/api';


export const attemptLogin= async (url, body, setOpen,setMessageError) => {
    try 
    {
        const response = await axios.post(`${BaseUrl}${url}`,body)
        return response; 
    }
    catch (error) {
       
        setOpen(true)
        setMessageError(error.response.data.message)
    }
}

export  const attemptSignUp = async (url, body, setOpen,setMessageError) => {
    try 
    {
        const response = await axios.post(`${BaseUrl}${url}`,body)
        return response; 
    }
    catch (error) {
        setOpen(true)
        setMessageError(error.response.data.message)
    }
}

export const attemptCreateAddress = async (url, body,token, setOpen, setMessageError) => {
  
    try 
    {
        const response = await axios.put(`${BaseUrl}${url}`, body, {
          headers: { 
              'auth': token
            }
          })
        return response; 
    }
    catch (error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }

  export const getUserAddress = async (url, token, setOpen, setMessageError, setUserAddress) => {
    try {
      const response = await axios.get(`${BaseUrl}${url}`, {
        headers: { 
            'auth': token
          }
        })
        setUserAddress(response.data.address)

    }
    catch(error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }


  export const attemptEditAddress = async (url, body,token, setOpen, setMessageError) => {
    try 
    {
        const response = await axios.put(`${BaseUrl}${url}`, body, {
          headers: { 
              'auth': token
            }
          })
        return response; 
    }
    catch (error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }

  export const getUserInfo= async (url, token, setOpen, setMessageError, setUserInfo) => {
    try {
      const response = await axios.get(`${BaseUrl}${url}`, {
        headers: { 
            'auth': token
          }
        })
        setUserInfo(response.data.user)
  
    }
    catch(error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }

  export const attemptEditUserInfo = async (url, body, token, setOpen, setMessageError) => {
    try 
    {
        const response = await axios.put(`${BaseUrl}${url}`, body, {
          headers: { 
              'auth': token
            }
          })
        return response; 
    }
    catch (error) {
      setOpen(true)
      setMessageError(error.response.data.message)
    }
  }