import React, { useState } from 'react'
import { checkError, validateField } from './formValidation'

function Login() {

    const [data, setData] = useState({ email: '', password: '' })
    const [error, setError] = useState({ email: '', password: '' })
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
                console.log('login in sucessful')
            }, 2000);
        }
        else {
            console.log('form not submitted')
        }
    }

    const { email, password } = error
    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="email" className="email">Email</label>
                    <input type="text" onChange={onChange} name="email" id="email"
                        validator={['required', 'isemailVlaid']} />
                    {email && <span className="error">{email}</span>}
                </div>
                <div className="field">
                    <label htmlFor="password" className="password">Password</label>
                    <input type="password" onChange={onChange} name="password" id="password"
                        validator={['required', 'passwordValid']} />
                    {password && <span className="error">{password}</span>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
