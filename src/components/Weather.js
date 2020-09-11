import React, { useEffect, useState } from 'react'
import axios from 'axios'

const weatherAPIKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

const Weather = (props) => {
    const [temp, setTemp] = useState(null)
    const [iconUrl, setIconUrl] = useState(null)
    const [weatherDescription, setWeatherDescription] = useState(null)
    const [city, setCity] = useState(null)

    const getWeatherData = async () => {
        try {
            const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + props.newLocation + '&appid=' + weatherAPIKey)
            return response.data
        } catch (e) {
            props.setShowError(true)
            throw new Error('city not found')
        }
    }
    
    useEffect(() => {
        getWeatherData()
            .then(data => {
                const temperature = Math.round(((data.main.temp * (9/5)) - 459.67))
                const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                setIconUrl(icon)
                setTemp(temperature)
                setWeatherDescription(data.weather[0].description)
                setCity(data.name)
                props.setValidLocation(data.name)
            })
            .catch(e => {
                props.setNewLocation(props.validLocation)
            })
    }, [props.updateWeather])

    const weatherStyles = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

    const tempStyle = {
        marginTop: '0',
        marginBottom: '0px',
        textAlign: 'center',
        fontSize: '20px'
    }

    const locationStyle = {
        fontSize: '12px',
        marginTop: '6px',
        marginBottom: '0'
    }

    const tempLocationStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    
    return (
        <div style={weatherStyles}>
            { iconUrl &&
                <img src={iconUrl} alt={weatherDescription} />
            }
            { temp &&
                <div style={tempLocationStyle}>
                    <p style={tempStyle}>{temp} &#186;F</p>
                    <p style={locationStyle}>{city}</p>
                </div>
            }
        </div>
    )
}

export default Weather