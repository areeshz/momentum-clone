import React, { useEffect, useState } from 'react'
import axios from 'axios'

const weatherAPIKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

const Weather = () => {
    const [temp, setTemp] = useState(null)
    const [iconUrl, setIconUrl] = useState(null)
    const [weatherDescription, setWeatherDescription] = useState(null)

    const getWeatherData = async () => {
        try {
            const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=' + weatherAPIKey)
            return response.data
        } catch (e) {
            console.error(e)
        }
    }
    
    useEffect(() => {
        getWeatherData()
            .then(data => {
                const temperature = Math.floor(((data.main.temp * (9/5)) - 459.67) * 10) / 10
                const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                setIconUrl(icon)
                setTemp(temperature)
                setWeatherDescription(data.weather[0].description)
            })
    }, [])

    const weatherStyles = {
        display: 'flex',
        alignItems: 'center'
    }
    
    return (
        <div style={weatherStyles}>
            { iconUrl &&
                <img src={iconUrl} alt={weatherDescription} />
            }
            { temp &&
                <p>{temp} degrees F</p>
            }
        </div>
    )
}

export default Weather