import React from 'react';
import { Form, Button, Jumbotron, Col } from 'react-bootstrap';

import styles from './Doctor.module.css';

export class Doctor extends React.Component{
    constructor() {
        super();
        this.state = {
          patientID: "#####",
          patientName: "Rahul Gupta",
          disease: ""
          
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        // e.g.: send to remote API
        event.preventDefault();
        console.log("state", this.state);
        
      }
    
      render() {
        return (
          <div className="container-fluid">
            <center><h2 className="display-3">Add medical Record</h2></center>
            <br />
            <Jumbotron className="container-fluid">
              
              <Form>
                <Form.Text className="text-muted">
                  We'll never share your details with anyone else.
                </Form.Text>
                <Form.Row>
                  <Col>
                    <Form.Text>
                        Patient ID: {this.state.patientID}
                    </Form.Text>
                  </Col>
                  <Col>
                  <Form.Text>
                        Patient Name: {this.state.patientName}
                    </Form.Text>
                  </Col>
                </Form.Row>
                <br />
                <label>Enter Disease</label>
                <Form.Control
                    name="disease"
                    type="text"
                    placeholder="Enter patient disease"
                    onChange={this.handleChange}
                    required
                  />
                <br />
                <label><Form.Text>Upload medical record</Form.Text></label>
                <Form.File />
                <br />
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Tick if the entered info is correct"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                  Update
                </Button>
              </Form>
            </Jumbotron>
          </div>
        );
      }
    }
