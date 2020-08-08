import React from 'react';
import { Button, Card} from 'semantic-ui-react';

export class AssignDoctor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            patientsArray: []
        }
        this.accounts = props.accounts;
        this.contract = props.contract;
    }

    componentDidMount = () => {
        console.log(this.state.patientsArray);
        this.handleShowAllPatients();
    }

    //adminDashBoard show all patients
    handleShowAllPatients = async () => {
        try {
            alert('check 0');
        var count = await this.contract.methods.patientMappingCount().call();
        console.log(count);
        let patientsArray = [];
        alert("check 1");
        for (let i = 0; i < count; i++) {
            var x = await this.contract.methods.patientMapping(i).call();
            patientsArray.push(x);
        }
        alert('check 2');
        this.setState({
            patientsArray: patientsArray
        })
        alert('check 3');
        console.log("All Patients: " + this.state.patientsArray);   
        } catch (err) {
        console.log(err.message);
        }
        
    }

    render(){
        return (
            <div>
                <h1>Patient List</h1>
                <Card.Group>
                  <Card>
                  <Card.Content>
                      <Card.Header>Steve Sanders</Card.Header>
                      <Card.Meta>Friends of Elliot</Card.Meta>
                      <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                      </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <div className='ui two buttons'>
                      <Button basic color='blue'>
                          Assign Doctor
                      </Button>
                      </div>
                  </Card.Content>
                  </Card>
                  <Card>
                  <Card.Content>
                      
                      <Card.Header>Molly Thomas</Card.Header>
                      <Card.Meta>New User</Card.Meta>
                      <Card.Description>
                      Molly wants to add you to the group <strong>musicians</strong>
                      </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <div className='ui two buttons'>
                      <Button basic color='blue'>
                          Assign Doctor
                      </Button>
                      </div>
                  </Card.Content>
                  </Card>
                  <Card>
                  <Card.Content>
                      <Card.Header>Jenny Lawrence</Card.Header>
                      <Card.Meta>New User</Card.Meta>
                      <Card.Description>
                      Jenny requested permission to view your contact details
                      </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <div className='ui two buttons'>
                      <Button basic color='blue'>
                          Assign Doctor
                      </Button>
                      </div>
                  </Card.Content>
                  </Card>
              </Card.Group>
            </div>
        )
    }
}
