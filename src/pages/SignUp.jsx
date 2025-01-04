

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import FormInput from '../components/FormInput';
import useForm from '../hooks/useForm';
import { signUpNewUser } from '../services/authAPI';
const initialState = {}
const SignUp =()=> {

 
  const formInputFields = [
    {
      label: 'First Name *',
      name: 'fName',
      type: 'text',
      placeholder: 'Enter First Name',
      required: true,
    },
    {
      label: 'Last Name *',
      name: 'lName',
      type: 'text',
      placeholder: 'Enter Last Name',
      required: true,
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'text',
      placeholder: 'Enter  phone number',
    },
    {
      label: 'Email *',
      name: 'email',
      type: 'email',
      placeholder: 'Enter email',
      required: true,
    },
    {
      label: 'Password *',
      type: 'password',
      name: 'password',
      placeholder: 'Enter Password',
      required: true,
    },
    {
      label: 'Confirmed Password *',
      type: 'password',
      name: 'confirmedPassword',
      placeholder: 'Enter Password',
      required: true,
    },
  ]
  const {form, setForm, handleOnChange,passwordErrors } = useForm(initialState)
  const {confirmedPassword, ...rest} = form

  const handleOnSubmit = async (e)=>{
    e.preventDefault()
    const res = await signUpNewUser(rest)
  }
 
  return (
    <Container className="">
      <Form
        className="card mt-5 py-4 px-3 w-50 m-auto shadow-lg rounded"
        onSubmit={handleOnSubmit}
      >
        <h5 className='mb-4'>Join the Library Community ! </h5>
        {formInputFields.map((item, index) => {
          
          return <FormInput key={index} {...item} onChange={handleOnChange} />
        })}
        {/* displaying password strength errors */}
        {passwordErrors.length > 0 && (
          <ul className="text-danger">
            {passwordErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <div className="w-50 m-auto mt-4">
          <Button
            variant="primary"
            type="submit"
            disabled={passwordErrors.length}
            style={{ width: '100%' }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default SignUp;