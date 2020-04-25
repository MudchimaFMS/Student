/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
class AddStudent extends Component {
  constructor(props){
    super(props);
    this.onChangeRfid = this.onChangeRfid.bind(this);
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeFaculty = this.onChangeFaculty.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      rfid : this.props.match.params.rfid,
      studentid : '',
      firstname : '',
      lastname : '',
      faculty : '',
      grade : '',
  };
}
onChangeRfid(e){
  this.setState({
      rfid: e.target.value
  });
}
onChangeStudentID(e){
  this.setState({
      studentid: e.target.value
  });
}
onChangeFirstname(e){
  this.setState({
      firstname: e.target.value
  });
}
onChangeLastname(e){
  this.setState({
      lastname: e.target.value
  });
}
onChangeFaculty(e){
  this.setState({
      faculty: e.target.value
  });
}
onChangeGrade(e){
  this.setState({
      grade: e.target.value
  });
}
onChangeSubject(e){
  this.setState({
      subject: e.target.value
  });
}
onSubmit(e){
  e.preventDefault();
  const newperson ={
    rfid : this.props.match.params.rfid,
    studentid : this.state.studentid,
    FirstName : this.state.firstname,
    LastName : this.state.lastname,
    Faculty : this.state.faculty,
    Grade : this.state.grade,
    Subject : this.state.subject,
  };
  axios.post('http://3.23.89.167:5000/persons/add',newperson)
    .then(res => console.log(res.data));
    window.location = '/';
        this.setState({
          rfid : '',
          studentid : '',
          firstname : '',
          lastname : '',
          faculty : '',
          grade : '',
          subject : '',
        })
}
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add Student"
                content={
                  <form onSubmit={this.onSubmit}>
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "RFID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "RFID",
                          defaultValue: this.state.rfid,
                          onChange:this.onChangeRfid,
                          disabled:true
                        },
                        {
                          label: "Student ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Student ID",
                          onChange:this.onChangeStudentID
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          onChange:this.onChangeFirstname
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          onChange:this.onChangeLastname
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Faculty",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Faculty",
                          onChange:this.onChangeFaculty
                        },
                        {
                          label: "Year",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Grade",
                          onChange:this.onChangeGrade
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Subject",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Subject",
                          onChange:this.onChangeSubject
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Add Student
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
        <span>1.ผู้ใช้งานกรุณาแตะบัตรRFID</span><br></br>
      </div>
    );
  }
}

export default AddStudent;
