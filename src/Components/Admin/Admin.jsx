import React from 'react';

class Admin extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			web3: null
		}
		this.setState = {
			web3: props.web3
		}
	}
	render(){
		return (
		<div>
			<h3>This is Admin</h3>
			
		</div>
	)
	}
}

export default Admin;