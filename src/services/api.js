import axios from 'axios'
import {toast} from 'react-toastify'

export const apiProcessor = async ({url, method, payload, showToast})=>{
    
    try {
      
        const responsePending =  axios({
            method,
            url,
            data:payload,
            // headers
        })
        if(showToast){
            toast.promise(responsePending,{
                pending:"Please wait"
            })
        }
        const {data} = await responsePending
        console.log(data)
        showToast && toast[data.status](data.message)
        return data
    } catch (error) {
        const msg = error?.response?.data?.message || error.message
        toast.error(msg)
        return msg
     
    }
}