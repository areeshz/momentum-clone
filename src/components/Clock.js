import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Clock = () => {
    const [time, setTime] = useState(moment().format('h:mm A'))

    const setNewTime = () => {
        setTime(moment().format('h:mm A'))
    }

    useEffect(() => {
        const clockInterval = setInterval(setNewTime, 1000)

        return function () {
            clearInterval(clockInterval)
        }
    }, [])

    const timeStyle = {
        fontSize: '125px',
        textAlign: 'center',
        marginTop: '0px',
        marginBottom: '0px'
    }

    const greetingStyle = {
        fontSize: '50px',
        textAlign: 'center',
        marginTop: '10px'
    }

    return (
        <div>
            <p style={timeStyle}>{time}</p>
            <p style={greetingStyle}>Welcome, Areesh</p>
        </div>
    )
}

export default Clock