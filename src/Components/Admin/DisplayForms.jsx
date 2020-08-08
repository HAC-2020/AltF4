import React from 'react';
import { PatientForm } from './PatientForm.jsx';
import { AddDoctorForm } from './AddDoctorForm.jsx';
import { AssignDoctorForm } from './AssignDoctorForm.jsx';
const DisplayForms = ({ activeForm }) => {
   if(activeForm === 'PatientForm'){
    return(
        <div>
            <center>
                <h2 className="display-3"> Patient Form</h2>
                <PatientForm />    
            </center>
            
        </div>
    )
   } else if (activeForm === 'AddDoctorForm'){
    return(
        <div>
            <center>
                <h2 className="display-3"> Add Doctor Form</h2>
                <AddDoctorForm />
            </center>
            
        </div>
    )
   }else{
    return(
        <div>
            <center>
                <h2 className="display-3"> Assign a doctor Form</h2>
                <AssignDoctorForm />    
            </center>
            
        </div>
    )
   }
}

export default DisplayForms;