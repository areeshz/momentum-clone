import React, { useState, useEffect } from 'react'
import axios from 'axios'

const quoteApiUrl = 'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&callback=?&lang=en'

const Quote = () => {
    const [quoteInfo, setQuoteInfo] = useState(null)

    const getQuoteInfo = async () => {
        try {
            const response = await axios.get(quoteApiUrl)
            setQuoteInfo(response.data)
            console.log(response.data)
        } catch (e) {
            console.error(e)
        }
        
    }

    useEffect(() => {
        getQuoteInfo()
    }, [])

    const quoteBoxStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    return (
        <React.Fragment >
            {quoteInfo?.quoteText &&
            <div style={quoteBoxStyles}>
                <p><a href={quoteInfo.quoteLink} target='_blank' rel='noopener noreferrer'>{quoteInfo.quoteText}</a></p>
                <p>{quoteInfo.quoteAuthor ? `- ${quoteInfo.quoteAuthor}` : '- Unknown Author'}</p>
            </div>
        }
        </React.Fragment>
        
    )
}

export default Quote