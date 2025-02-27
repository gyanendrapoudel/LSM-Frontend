import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link, useNavigate} from 'react-router-dom'
import useForm from '../hooks/useForm'
import FormInput from '../components/FormInput'
import { loginUser } from '../services/authAPI'
import { fetchUserApi } from '../features/user/userAPI'
import { fetchUserAction } from '../features/user/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
const SignIn = () => {
  const { form, setForm, handleOnChange } = useForm({})
  const {user} = useSelector((state)=>state.userInfo)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleOnSubmit = async(e)=>{
    e.preventDefault()
    // api call using email and password
    
      if(form?.email && form?.password){
      const {email, password} = form
        // call api to login route using AXIOS
        const {status, message,payload} = await loginUser({email,password})
        if(payload?.accessJWT){
              sessionStorage.setItem('accessJWT', payload.accessJWT)
              localStorage.setItem('refreshJWT', payload.refreshJWT)
              fetchUserAction(dispatch)
              
                       
        }
        
        
      }


  }
  useEffect(() => {
    user?._id && navigate('/user')
  }, [user?._id , navigate])

  return (
    <div className="signin-page">
      <Form onSubmit={handleOnSubmit}>
        <h4 className="mb-3">Welcome back to Library</h4>

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          required
          placeholder="Enter Email"
          onChange={handleOnChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          placeholder="*****"
          onChange={handleOnChange}
        />

        <Button className="mb-3" variant="primary" type="submit">
          Signin
        </Button>
        <div className="mb-3 ">
          Forgot Password?
          <Link
            to="/forget-password"
            className="text-light text-decoration-underline  mx-2"
          >
            Reset Now
          </Link>
        </div>
      </Form>
    </div>
  )
}
export default SignIn
