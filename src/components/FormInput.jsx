import Form from 'react-bootstrap/Form'
const FormInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
       {...rest}
      />
    </Form.Group>
  )
}
export default FormInput
