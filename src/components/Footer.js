import React from 'react'
import Quote from './Quote'
import Settings from './Settings'

const Footer = () => {
    const containerStyles = {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '15px'
    }

    return (
        <div style={containerStyles}>
            <Settings />
            <Quote />
            <Settings />
        </div>
    )
}

export default Footer