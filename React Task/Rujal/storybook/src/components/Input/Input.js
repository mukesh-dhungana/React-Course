import React from 'react'

const Input = (props) => {
    const { size = 'medium', ...rest } = props

    return (
        <div>
            <input className={`input ${size}`} {...rest} />
        </div>
    )
}

export default Input
