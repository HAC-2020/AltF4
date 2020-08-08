import React from 'react';
import { Form, Col, Button, Jumbotron} from 'react-bootstrap';

export class AddDoctorForm extends React.Component{
    constructor() {
        super();
        this.state = {
          docName: "",
          ethAddress: null,
          specialization: ""
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
            <Jumbotron>
              <h3 className="display-5">Add a new Doctor</h3>
              <Form>
                <Form.Text className="text-muted">
                  We'll never share your details with anyone else.
                </Form.Text>
                <Form.Row>
                  <Col>
                    <Form.Control
                      name="DocName"
                      type="text"
                      placeholder="Doctor name"
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      name="EthAdd"
                      type="text"
                      placeholder="Enter Doctor Eth Address"
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Group>
                  <Form.Control
                    name="specialization"
                    type="text"
                    placeholder="Enter Doctor Specialization"
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Tick if the entered info is correct"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                  Add
                </Button>
              </Form>
            </Jumbotron>
          </div>
        );
      }
    }