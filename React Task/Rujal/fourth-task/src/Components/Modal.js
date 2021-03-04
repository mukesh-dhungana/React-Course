import React from 'react'
import { FirstLetterCapital } from './FirstLetterCapital'

const close = {
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textAlign: 'center',
    margin: '12px'
}
function Modal({ id, title, body, show, onClose }) {
    return (
        // Modal is opened when show(passed from App.js as prop) is true 
        <div className="modal" style={{ display: !show ? 'none' : 'flex' }}>
            <div className="modal-content">
                <span style={close} onClick={onClose}>&times;</span>
                <h1 style={{ textAlign: 'center' }}>
                    {id}. {title && FirstLetterCapital(title)}
                </h1>
                <div style={{ textAlign: 'justify' }}>
                    <p style={{ margin: 'auto', width: '90%' }}>
                        { body && FirstLetterCapital(body)}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Modal
