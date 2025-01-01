import { useEffect, useState } from "react"
import { passwordValidators } from '../utils/passwordValidators'
const handleOnChange = ({e, form, setForm})=>{
    const {name, value} = e.target
    setForm({
        ...form,
        [name]:value
    })
}

const useForm = (initialSate)=>{
 const [form ,setForm] = useState(initialSate)
 const [passwordErrors, setPasswordErrors] = useState([])

//  password characters check 
 useEffect(() => {
   const errors = passwordValidators(form.password, form.confirmedPassword)
   setPasswordErrors(errors)
 }, [form.password, form.confirmedPassword])

 return {
    form, 
    setForm,
    handleOnChange:(e)=>handleOnChange({e,form,setForm}),
    passwordErrors,
 }
}
export default useForm