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
  FormControl,
} from "react-bootstrap";
import {Input,
Label} from "reactstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
class CheckIn extends Component {
  constructor(props){
    super(props);
    this.onChangeRfid = this.onChangeRfid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      rfid : '',
      studentid : '',
      FirstName : '',
      LastName : '',
      Faculty : '',
      Grade : '',
  };
}
onChangeRfid(e){
  this.setState({
      rfid: e.target.value
  });
}

onSubmit(e){
  e.preventDefault();
  const timestamp = Date.now(); // This would be the timestamp you want to format
  const Day = new Intl.DateTimeFormat('en-US', {day: '2-digit'}).format(timestamp)
  const Month = new Intl.DateTimeFormat('en-US', {month: '2-digit'}).format(timestamp)
  const Year = new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(timestamp)
  const Time = new Intl.DateTimeFormat('en-Us',{ hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
  
  axios.get('http://localhost:5000/persons/'+this.state.rfid)
    .then(res => {
        console.log(res.data);
        this.setState({
            rfid: res.data[0].rfid,
            studentid: res.data[0].studentid,
            FirstName: res.data[0].FirstName,
            LastName: res.data[0].LastName,
            Faculty: res.data[0].Faculty,
            Grade: res.data[0].Grade
        })
        const newreport ={
            rfid : this.state.rfid,
            studentid : this.state.studentid,
            FirstName : this.state.FirstName,
            LastName : this.state.LastName,
            Faculty : this.state.Faculty,
            Grade : this.state.Grade,
            Day : Day,
            Month : Month,
            Year : Year,
            Time : Time
          };
        axios.post('http://localhost:5000/reports/add',newreport)
        .then(res => console.log(res.data));
        window.location = '/';
        this.setState({
          rfid : '',
          studentid : '',
          FirstName : '',
          LastName : '',
          Faculty : '',
          Grade : '',
          Day : '',
          Month : '',
          Year : '',
          Time : ''
        })
    });
}
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Check IN"
                content={
                  <form onSubmit={this.onSubmit}>
                     <Label for="rfid">RFID</Label>
                      <Input type="text" id="rfid" autoFocus onChange={this.onChangeRfid} placeholder="RFID" required/>
                    <br></br><Button bsStyle="info" pullRight fill type="submit">
                      CHECK IN
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CheckIn;
