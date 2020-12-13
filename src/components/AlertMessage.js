import React from 'react'
import { Message } from 'semantic-ui-react'

const AlertMessage = (props) => {
	const floatStyle = {
		position: 'fixed',
		bottom: '20px',
		zIndex: '1000'
	}

	const centerFloat = {
		display: 'flex',
		justifyContent: 'center'
	}

	return (
		<div style={centerFloat}>
			<Message
				style={floatStyle}
				content={props.content}
				header={props.header}
				floating={true}
				onDismiss={props.onDismiss}
				error
			/>
		</div>
	)
}

export default AlertMessage