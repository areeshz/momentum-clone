import React, { useState } from 'react'
import { Button, Modal, Form, Checkbox } from 'semantic-ui-react'

const Settings = (props) => {
    const [open, setOpen] = useState(false)
    const [newName, setNewName] = useState(props.name === 'Stranger' ? '' : props.name)
    const [newImg, setNewImg] = useState(false)

    const onNameChange = (e) => {
        setNewName(e.target.value)
    }

    const onLocationChange = (e) => {
        props.setNewLocation(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        props.setName(newName || 'Stranger')
        localStorage.setItem('momentum-name', newName || 'Stranger')
        if (props.newLocation !== props.validLocation) {
            props.setUpdateWeather(!props.updateWeather)
        }
        if (newImg) {
            props.getImgUrl(true)
            setNewImg(false)
        }
        
        setOpen(false)
    }

    const toggleNewImg = () => {
        setNewImg(!newImg)
    }

    const onCancel = () => {
        setOpen(false)
        setNewName(props.name === 'Stranger' ? '' : props.name)
        props.setNewLocation(props.validLocation)
        setNewImg(false)
    }

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
                        <Form.Field>
                            <Checkbox label='Refresh Background Image?' checked={newImg} onChange={toggleNewImg}/>
                        </Form.Field>
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