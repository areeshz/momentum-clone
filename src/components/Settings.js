import React, { useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

const Settings = (props) => {
    const [open, setOpen] = useState(false)
    const [newName, setNewName] = useState(props.name === 'Stranger' ? '' : props.name)

    const onNameChange = (e) => {
        setNewName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log('new name is', newName)
        props.setName(newName)
        setOpen(false)
    }

    const onCancel = () => {
        setOpen(false)
        setNewName(props.name === 'Stranger' ? '' : props.name)
    }

    return (
        <div>
            <Button basic icon='settings' onClick={() => setOpen(true)}/>
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
                    <Form onSubmit={onSubmit}>
                        <Form.Input label='Name' placeholder='e.g. Areesh' value={newName} onChange={onNameChange}/>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button content='Cancel' icon='cancel' labelPosition='right' onClick={onCancel} />
                    <Button positive content='Save' icon='checkmark' labelPosition='right' onClick={onSubmit}/>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default Settings