import { fetchUserApi } from "./userAPI"
import { setUser } from "./userSlice"

// calling api and setting user
export const fetchUserAction = async(dispatch)=>{
    // calling api
    const { status, payload } = await fetchUserApi()
    // receive user
    
    if(status === 'success' && payload?._id){
        console.log(payload, 'payload')
        dispatch(setUser(payload))
    }
     
    // set user
}