import { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import Alert from 'react-bootstrap/Alert'

  
import Spinner from 'react-bootstrap/Spinner'
import { activateNewUser } from '../services/authAPI'
const ActivateUser = () => {
    const [isLoading, setIsLoading] = useState(true)
    const fetchOnce = useRef(true)
    // api call with query string
    // use useSearchParams to read data from url
    const [searchParams, setSearchParams] = useSearchParams()
    const [response,setResponse]  = useState({})
    const navigate = useNavigate()
    const sessionId = searchParams.get('sessionId')
    const t = searchParams.get("t")
    

    // using use effect to call api 
    
    useEffect(() => {
      if (fetchOnce.current) {
        const activeUser = async (payload) => {
          const result = await activateNewUser(payload)
          setResponse(result)
          setIsLoading(false)
          setTimeout(() => {
            result?.status === 'success' && navigate('/signin')
          }, 3000);
        }
        activeUser({ sessionId, t })
        fetchOnce.current = false
        
       
      }
      
    }, [sessionId,t])
   console.log(response)
  return (
    <>
      {isLoading && (
        <div className="mt-4 text-center ">
          <Spinner animation="border" variant="info" />
          <p className='mt-2'>Please do not go back or refresh. Please wait ...</p>
        </div>
      )}
      {
      response?.message && 
      <div style={{ marginTop: '100px' }} className="m-5 ">
        <Alert variant={response?.status === 'success' ? 'success' : 'danger'}>
          {response?.message}
        </Alert>
      </div>
        }
    </>
  )
}
export default ActivateUser
