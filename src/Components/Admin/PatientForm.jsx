import React from 'react';
import { Form, Button, Jumbotron, Col } from 'react-bootstrap';
import styles from './Admin.module.css';

export class PatientForm extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <Jumbotron className={styles.formcard}>
                <h3 className="display-5">Enter Patient info</h3>
                <Form>
                    <Form.Text className="text-muted">
                        We'll never share your details with anyone else.
                    </Form.Text>
                    <Form.Row>
                        <Col>
                        <Form.Control placeholder="Patient name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Patient Age" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Patient Sex" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Group controlId="formBasicEmail">                        
                        <Form.Control type="email" placeholder="Enter email" />    
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">                        
                        <Form.Control type="number" placeholder="Phone number" />
                    </Form.Group>
                    <Form.File id="exampleFormControlFile1" />
                    <Form.Label>Patient's Eth Address</Form.Label>
                    <Form.Text className="text-muted">
                        ################
                    </Form.Text>
                    <Form.Group controlId="formBasicCheckbox">                        
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Jumbotron>
            </div>
        )
    }
}