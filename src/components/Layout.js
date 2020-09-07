import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import Clock from './Clock'
import Footer from './Footer'
import axios from 'axios'

const unsplashAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY

const Layout = (props) => {
    const [imgUrl, setImgUrl] = useState('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg')
    const [name, setName] = useState('Stranger')

    const getImgUrl = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random/?orientation=landscape&client_id=' + unsplashAPIKey)
            setImgUrl(response.data.urls.regular)
        } catch (e) {
            console.error(e)
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

    return (
        <div style={layoutStyles}>
            <Weather />
            <Clock name={name} />
            <Footer name={name} setName={setName} />
        </div>
    )
}

export default Layout