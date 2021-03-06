import React, { useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

const Settings = (props) => {
	const [open, setOpen] = useState(false)
	const [newName, setNewName] = useState(props.name === 'Stranger' ? '' : props.name)
	const [newImgTiming, setNewImgTiming] = useState(props.imgTiming)
	const [newTimer, setNewTimer] = useState(props.backgroundTimer)

	const onNameChange = (e) => {
		setNewName(e.target.value)
	}

	const onLocationChange = (e) => {
		props.setNewLocation(e.target.value)
	}

	const onTimerChange = (e, {value}) => {
		setNewTimer(value)
	}

	const onSubmit = (e) => {
		e.preventDefault()

		props.setName(newName || 'Stranger')
		localStorage.setItem('momentum-name', newName || 'Stranger')
		props.setImgTiming(newImgTiming)
		localStorage.setItem('momentum-img-timing', newImgTiming)
		props.setBackgroundTimer(newTimer)
		localStorage.setItem('momentum-img-timer', newTimer)
		if (props.newLocation.toLowerCase() !== props.validLocation.toLowerCase()) {
			props.setUpdateWeather(!props.updateWeather)
		}
		
		setOpen(false)
	}

	const toggleNewImgTiming = () => {
		setNewImgTiming(!newImgTiming)
	}

	const onCancel = () => {
		setOpen(false)
		setNewName(props.name === 'Stranger' ? '' : props.name)
		props.setNewLocation(props.validLocation)
		setNewImgTiming(props.imgTiming)
		setNewTimer(props.backgroundTimer)
	}

	const timerOptions = [
		{text: '15 Minutes', value: 900000},
		{text: '30 Minutes', value: 1800000},
		{text: '60 Minutes', value: 3600000},
		{text: '90 Minutes', value: 5400000}
	]

	return (
		<div>
			<Button icon='settings' onClick={() => setOpen(true)}/>
			<Modal
				closeIcon
				size='small'
				dimmer='inverted'
				onClose={onCancel}
				onOpen={() => setOpen(true)}
				open={open}
			>
				<Modal.Header>Settings</Modal.Header>
				<Modal.Content>
					<h3>Tailor Your Experience</h3>
					<Form onSubmit={onSubmit} id='settings-form'>
						<Form.Input label='Name' placeholder='e.g. Areesh' value={newName} onChange={onNameChange} />
						<Form.Input label='City' placeholder='e.g. Atlanta' value={props.newLocation} onChange={onLocationChange} />
						<Form.Radio label='Background Images Reflect Time' slider checked={newImgTiming} onChange={toggleNewImgTiming} />
						<Form.Dropdown label='Background Change Timer' placeholder='Select Timer' value={newTimer} options={timerOptions} onChange={onTimerChange} />
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button content='Cancel' icon='cancel' labelPosition='right' onClick={onCancel} />
					<Button positive content='Save' icon='checkmark' labelPosition='right' type='submit' form='settings-form'/>
				</Modal.Actions>
			</Modal>
		</div>
	)
}

export default Settings