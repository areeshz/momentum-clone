import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import Weather from './Weather'
import Clock from './Clock'
import Footer from './Footer'
import AlertMessage from './AlertMessage'
import axios from 'axios'
import moment from 'moment'
import blackScreen from '../black_screen.jpg'
import atlanta from '../atlanta.jpg'
import getGreeting from '../helpers/getGreeting'

const unsplashAPIKey = process.env.REACT_APP_UNSPLASH_API_KEY

const Layout = (props) => {
	const [background, setBackground] = useState((localStorage['momentum-background'] && JSON.parse(localStorage['momentum-background'])) || {
		imgUrl: blackScreen,
		timeSet: new Date('August 31, 2020 03:24:00')
	})
	const [name, setName] = useState(localStorage['momentum-name'] || 'Stranger')
	const [validLocation, setValidLocation] = useState(localStorage['momentum-valid-location'] || 'Atlanta')
	const [newLocation, setNewLocation] = useState(localStorage['momentum-valid-location'] || 'Atlanta')
	const [updateWeather, setUpdateWeather] = useState(false)
	const [time, setTime] = useState(moment().format('h:mm A'))
	const [timezoneOffset, setTimezoneOffset] = useState(3600)
	const [imgTiming, setImgTiming] = useState(localStorage['momentum-img-timing'] ? localStorage['momentum-img-timing'] === 'true' : true)
	const [backgroundTimer, setBackgroundTimer] = useState(localStorage['momentum-img-timer'] ? parseInt(localStorage['momentum-img-timer']) : 1800000)

	const [showError, setShowError] = useState(false)

	const getImgUrl = async (force) => {
		let oldTime = background.timeSet
		if (typeof oldTime === "string") {
			oldTime = new Date(oldTime)
		}

		if (!force && new Date() - oldTime.getTime() < backgroundTimer) {
			return
		}

		let imgQuery = ''
		if (imgTiming) {
			switch (getGreeting(time)) {
				case 'Good Morning,':
					imgQuery = 'morning'
					break;
				case 'Good Afternoon,':
					imgQuery = ''
					break;
				case 'Good Evening,':
					imgQuery = 'evening'
					break;
			}
		}

		try {
			const response = await axios.get('https://api.unsplash.com/photos/random/?orientation=landscape&client_id=' + unsplashAPIKey + (imgQuery ? `&query=${imgQuery}` : ''))
			const newBackground = {
				imgUrl: response.data.urls.regular,
				timeSet: new Date()
			}
			setBackground(newBackground)
			localStorage.setItem('momentum-background', JSON.stringify(newBackground))
		} catch (e) {
			const oldTime = new Date()
			oldTime.setMinutes(oldTime.getMinutes() - 27)
			const newBackground = {
				imgUrl: atlanta,
				timeSet: oldTime
			}
			setBackground(newBackground)
			localStorage.setItem('momentum-background', JSON.stringify(newBackground))
		}
	}

	const firstUpdate = useRef(true);
	useLayoutEffect(() => {
		if (firstUpdate.current) {
		firstUpdate.current = false
		return
		}

		getImgUrl(true)
	}, [imgTiming, validLocation])

	useEffect(() => {
		getImgUrl()

		const backgroundInterval = setInterval(getImgUrl, 60000)

		return function () {
			clearInterval(backgroundInterval)
		}
	}, [getImgUrl])

	const layoutStyles = {
		backgroundImage: `linear-gradient(
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.3)
		),
		url(${background.imgUrl})`,
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
					time={time}
					setTime={setTime}
				/>
				<Footer
					name={name}
					setName={setName}
					validLocation={validLocation}
					newLocation={newLocation}
					setNewLocation={setNewLocation}
					updateWeather={updateWeather}
					setUpdateWeather={setUpdateWeather}
					getImgUrl={getImgUrl}
					imgTiming={imgTiming}
					setImgTiming={setImgTiming}
					backgroundTimer={backgroundTimer}
					setBackgroundTimer={setBackgroundTimer}
				/>
			</div>
		</React.Fragment>

	)
}

export default Layout