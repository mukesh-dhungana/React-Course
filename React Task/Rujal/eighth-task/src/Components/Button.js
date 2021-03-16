import React from 'react'

const Button = ({ changeTheme }) => {
    return (
        <div className="switches">
            <label className="switch">
                <input type="checkbox" onChange={() => { changeTheme() }} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default React.memo(Button)
