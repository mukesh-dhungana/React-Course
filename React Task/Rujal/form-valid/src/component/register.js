import React, { useState } from 'react'
import { checkError, validateField } from './formValidation'

function Register() {
    const [data, setData] = useState({ email: '', fullName: '', address: '', phone: "" })
    const [error, setError] = useState({ email: '', fullName: '', address: '', phone: "" })
    const [isSubmitted, setSubmitted] = useState(false)

    const onChange = (e) => {
        const { name, value } = e?.target
        const error = isSubmitted ? validateField({ [name]: value }) : {}
        setData(prev => ({ ...prev, [name]: value }))
        setError(prev => ({
            ...prev, ...error
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        const errors = validateField(data)
        setError(prev => ({
            ...prev, ...errors
        }))

        if (!checkError(errors)) {
            setTimeout(() => {
                console.log('registration is sucessful')
            }, 2000);
        }
        else {
            console.log('form not submitted')
        }
    }

    const { email, fullName, phone } = error

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="email" className="email">Email</label>
                    <input type="text" onChange={onChange} name="email" id="email"
                        validator={['required', 'isemailVlaid']} />
                    {email && <span className="error">{email}</span>}
                </div>
                <div className="field">
                    <label htmlFor="fullName" className="fullName">Full Name</label>
                    <input type="text" onChange={onChange} name="fullName" id="fullName"
                        validator={['required']} />
                    {fullName && <span className="error">{fullName}</span>}
                </div>
                <div className="field">
                    <label htmlFor="address" className="address">Address</label>
                    <input type="text" onChange={onChange} name="address" id="address"
                    />
                </div>
                <div className="field">
                    <label htmlFor="phone" className="phone">Phone</label>
                    <input type="text" onChange={onChange} name="phone" id="phone"
                        validator={['mustBeDigit']}
                    />
                    {phone && <span className="error">{phone}</span>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
