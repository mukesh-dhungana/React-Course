import React from 'react'
import { FirstLetterCapital } from './FirstLetterCapital'

function Card({ id, title, body, onClick }) {
    return (
        <div className="card" onClick={() => onClick(id)}>
            <div className="card-header">
                <h2>{id}. {FirstLetterCapital(title)}</h2>
            </div>
            <div style={{ borderBottom: '1px solid #1289A7', width: '90%', margin: 'auto' }}></div>
            <div className="card-content">
                {FirstLetterCapital(body)}
            </div>
        </div>
    )
}

export default Card
