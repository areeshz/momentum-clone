import React, { useState, useEffect } from 'react'
import axios from 'axios'

const unsplashAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY

const Layout = (props) => {
    const [imgUrl, setImgUrl] = useState(null)

    const getImgUrl = async () => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random/?orientation=landscape&client_id=' + unsplashAPIKey)
            setImgUrl(response.data.urls.regular)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        // getImgUrl()
    }, [])

    const layoutStyles = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

    return (
        <div style={layoutStyles}>
            <p style={{ marginTop: '0'}}>Layout component</p>
            {props.children}
        </div>
    )
}

export default Layout