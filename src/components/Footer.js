import React from 'react'
import Quote from './Quote'
import Settings from './Settings'
import { Button } from 'semantic-ui-react'

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
				getImgUrl={props.getImgUrl}
				imgTiming={props.imgTiming}
				setImgTiming={props.setImgTiming}
				backgroundTimer={props.backgroundTimer}
				setBackgroundTimer={props.setBackgroundTimer}
			/>
			<Quote />
			<Button icon='refresh' onClick={() => props.getImgUrl(true)} />
		</div>
	)
}

export default Footer