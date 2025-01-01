

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import FormInput from '../components/FormInput';

const SignUp =()=> {

 
  const formInputFields = [
    {
      label: 'First Name',
      name:"fName",
      type: 'text',
      placeholder: 'Enter First Name',
      required: true,
    },
    {
      label: 'Last Name',
      name:"lName",
      type: 'text',
      placeholder: 'Enter Last Name',
      required: true,
    },
    {
      label: 'Phone',
      name:"phone",
      type: 'text',
      placeholder: 'Enter  phone number',
    },
    {
      label: 'Email',
      name:"email",
      type: 'email',
      placeholder: 'Enter email',
      required: true,
    },
    {
      label: 'Password',
      type: 'password',
      name:"password",
      placeholder: 'Enter Password',
      required: true,
    },
  ]
  return (
    <Container className="">
      <Form
        className="card mt-5 py-4 px-3 w-50 m-auto shadow-lg rounded"
      >
        {formInputFields.map((item, index) => {
          return <FormInput key={index} {...item} />
        })}
        <div className="w-50 m-auto mt-4">
          <Button
            variant="primary"
            type="submit"
            disabled={false}
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