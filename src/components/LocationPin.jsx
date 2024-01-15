import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

// Location pin icon and styling
const LocationPin = ({ text }) => {
    return (
        <div className="pin">
            <FontAwesomeIcon icon={faLocationDot} size="4x" style={{ color: '#0000ff' }} />
            <p className="pin-text">{text}</p>
        </div>
    )
}

export default LocationPin