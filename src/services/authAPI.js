//  all api call related to signup, login, and token

import { apiProcessor } from "./api";

const apiBaseUrl = "http://localhost:8000"
const authApiEp = apiBaseUrl+"/api/v1/auth"
export const signUpNewUser = async(payload)=>{
    const obj = {
        url: authApiEp+"/register",
        method:"post",
        payload,
        showToast : true,
        
    }
    const result = await apiProcessor (obj)
    return result
    
}

export const activateNewUser =  (payload)=>{
    console.log(payload)
    const obj = {
      url:  authApiEp+"/activate-user",
      method:"post",
      payload
    }
    
    return apiProcessor(obj)
}