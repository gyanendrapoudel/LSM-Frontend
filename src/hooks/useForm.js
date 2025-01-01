import { useState } from "react"
const handleOnChange = ({e, form, setForm})=>{
    const {name, value} = e.target
    setForm({
        ...form,
        [name]:value
    })
}

const useForm = (initialSate)=>{
 const [form ,setForm] = useState(initialSate)

 return {
    form, 
    setForm,
    handleOnChange:(e)=>handleOnChange({e,form,setForm})
 }
}
export default useForm