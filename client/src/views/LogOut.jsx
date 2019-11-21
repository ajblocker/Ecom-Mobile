import React from 'react'
import { Redirect } from 'react-router-dom'

class LogOut extends React.Component {

	//redirects to login when logged out
	componentDidMount() {
		this.props.onLogOut()
	}
	
	render() {
		return <Redirect to="/login" />
	}
}

export default LogOut