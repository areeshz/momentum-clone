import React, { useState, useEffect } from 'react'
import moment from 'moment'

import getGreeting from '../helpers/getGreeting'

const Clock = (props) => {
	const [time, setTime] = useState(moment().format('h:mm A'))

	const setNewTime = () => {
		const now = new Date()
		now.setHours(now.getUTCHours() + Math.floor(props.timezoneOffset / 3600))
		now.setMinutes(now.getUTCMinutes() + (props.timezoneOffset % 3600 / 60))
		setTime(moment(now).format('h:mm A'))
	}

	useEffect(() => {
		const clockInterval = setInterval(setNewTime, 1000)

		return function () {
			clearInterval(clockInterval)
		}
	}, [props.timezoneOffset])

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
			<p style={greetingStyle}>{getGreeting(time)} {props.name}</p>
		</div>
	)
}

export default Clock