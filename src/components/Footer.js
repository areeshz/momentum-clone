import React from 'react'
import Quote from './Quote'
import Settings from './Settings'

const Footer = (props) => {
    const containerStyles = {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '15px'
    }

    return (
        <div style={containerStyles}>
            <Settings
                name={props.name}
                setName={props.setName}
                validLocation={props.validLocation}
                newLocation={props.newLocation}
                setNewLocation={props.setNewLocation}
                updateWeather={props.updateWeather}
                setUpdateWeather={props.setUpdateWeather}
            />
            <Quote />
            <Settings
                name={props.name}
                setName={props.setName}
                validLocation={props.validLocation}
                newLocation={props.newLocation}
                setNewLocation={props.setNewLocation}
                updateWeather={props.updateWeather}
                setUpdateWeather={props.setUpdateWeather}
            />
        </div>
    )
}

export default Footer