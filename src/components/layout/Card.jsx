import React from 'react'
import './Card.css'

export default (props) => {
    const {titulo, color} = props

    const cardStyle = {
        backgroundColor: color || '#FC4A1A',
        borderColor: color || '#FC4A1A',
    }
    
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{titulo}</div>
            <div className="Content">
                {props.children}
            </div>

        </div>
    );
};