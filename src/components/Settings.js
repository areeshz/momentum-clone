import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

const Settings = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button basic icon='settings' onClick={() => setOpen(true)}/>
            <Modal
                closeIcon
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Header>Settings</Modal.Header>
                <Modal.Content>
                    <p>Modal Content, TBD</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button content='Cancel' icon='cancel' labelPosition='right' onClick={() => setOpen(false)} />
                    <Button positive content='Save' icon='checkmark' labelPosition='right'/>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default Settings