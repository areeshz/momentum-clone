import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import Clock from './Clock'
import Footer from './Footer'
import AlertMessage from './AlertMessage'
import axios from 'axios'
import blackScreen from '../black_screen.jpg'
import atlanta from '../atlanta.jpg'

const unsplashAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY

const Layout = (props) => {
    const [imgUrl, setImgUrl] = useState(blackScreen)
    const [name, setName] = useState('Stranger')
    const [validLocation, setValidLocation] = useState('Atlanta')
    const [newLocation, setNewLocation] = useState('Atlanta')
    const [updateWeather, setUpdateWeather] = useState(false)
    const [timezoneOffset, setTimezoneOffset] = useState(3600)

    const [showError, setShowError] = useState(false)

    const getImgUrl = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random/?orientation=landscape&client_id=' + unsplashAPIKey)
            setImgUrl(response.data.urls.regular)
        } catch (e) {
            setImgUrl(atlanta)
        }
    }

    useEffect(() => {
        getImgUrl()
    }, [])

    const layoutStyles = {
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),
          url(${imgUrl})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: '15px',
        paddingRight: '15px',
        color: 'white'
    }

    const onDismiss = () => {
        setShowError(false)
    }

    return (
        <React.Fragment>
            {showError &&
                <AlertMessage onDismiss={onDismiss} content='Please try again with a valid city.' header='Invalid City' />
            }
            <div style={layoutStyles}>
                <Weather
                    validLocation={validLocation}
                    setShowError={setShowError}
                    setValidLocation={setValidLocation}
                    newLocation={newLocation}
                    setNewLocation={setNewLocation}
                    updateWeather={updateWeather}
                    setTimezoneOffset={setTimezoneOffset}
                />
                <Clock
                    name={name}
                    timezoneOffset={timezoneOffset}
                />
                <Footer
                    name={name}
                    setName={setName}
                    validLocation={validLocation}
                    newLocation={newLocation}
                    setNewLocation={setNewLocation}
                    updateWeather={updateWeather}
                    setUpdateWeather={setUpdateWeather}
                />
            </div>
        </React.Fragment>

    )
}

export default Layout