import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import useForm from '../hooks/useForm'
import FormInput from '../components/FormInput'
const SignIn = () => {
  const { form, setForm, handleOnChange } = useForm({})
  
  return (
    <div className="signin-page">
      <Form>
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

        <Button variant="primary" type="submit">
          Signin
        </Button>
        <div className="mb-3" >
          <Link
            to="/forget-password"
            className="text-light text-decoration-none "
          >
            forgot password
          </Link>
        </div>
      </Form>
    </div>
  )
}
export default SignIn
