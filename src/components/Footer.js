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
			/>
			<Quote />
			<Button icon='code' onClick={() => window.open('https://github.com/areeshz/momentum-clone', '_blank')} />
		</div>
	)
}

export default Footer