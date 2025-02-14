import { apiProcessor } from "../../services/api.js"

// call api processor to fetch the user
const userApiEp = 'http://localhost:8000/api/v1/user'
export const fetchUserApi = async()=>{
    const obj = {
      url: userApiEp + '/profile',
      method: 'get',
      isPrivateCall: true,
    }
    const result = await apiProcessor (obj)
    return result
    
}
