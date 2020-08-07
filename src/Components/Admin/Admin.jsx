import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Admin.module.css';
import DisplayForms from './DisplayForms.jsx';

class Admin extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			x: "",
			web3: null
		}
		this.setState = {
			web3: props.web3
		}
		
		this.addPatient = this.addPatient.bind(this);
		this.addDoctor = this.addDoctor.bind(this);
		this.assignDoctor = this.assignDoctor.bind(this);
	}
	
	addPatient(){
		console.log('add new patient');
		this.setState({ x:"Patient"});
	}
	addDoctor(){
		console.log("add new doctor");
		this.setState({ x:"Add Doctor"});
	}
	assignDoctor(){
		console.log("Assign a new doctor");
		this.setState({ x:"Assign Doctor"});
	}

	render(){
		
		return (
		<div>
			<center><h2 className="display-2">Roles that Admin can perform</h2></center>
			<div className={styles.buttonFormDisplay}>
				<Button variant="info" onClick={this.addPatient}>Add a new Patient</Button>
				<Button variant="info" onClick={ this.addDoctor }>Add a new Doctor</Button>
				<Button variant="info" onClick={ this.assignDoctor }>Assign a Doctor</Button>
			</div>
			<center>
				<p>{this.state.x}</p>
			</center>
			<DisplayForms />
		</div>
	)
	}
}

export default Admin;