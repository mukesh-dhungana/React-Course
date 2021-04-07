import React, { useState } from 'react'
// import { validateInfo } from './FormValidation'

const useForm = (validateInfo) => {
    const [values, setValues] = useState(
        {
            student_name:'',
            student_email: '',
            student_contactNo: '',
            student_address: ''
        }
    )

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateInfo(values))
    }

    return {handleChange, values, handleSubmit, errors}
}

export default useForm
