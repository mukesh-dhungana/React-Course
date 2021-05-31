import React from 'react'
const Tooltip = (props) => {
    const { background, height, text } = props
    return (
        <div style={{ background, height }} className="tooltip">
            <p>
                {text}
            </p>
            <div className="triangle" style={{ borderTop: `100px solid ${background}` }}></div>
        </div>
    )
}

export default Tooltip