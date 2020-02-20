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
import {Input,
Label} from "reactstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
class AddStudent1 extends Component {
  constructor(props){
    super(props);
    this.onChangeRfid = this.onChangeRfid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      rfid : '',
      check : '',
  };
}
onChangeRfid(e){
  this.setState({
      rfid: e.target.value
  });
}

onSubmit(e){
  e.preventDefault();
    window.location = '/admin/regis/'+this.state.rfid;
}
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="RFID code"
                content={
                  <form onSubmit={this.onSubmit}>
                     <Label for="rfid">RFID</Label>
                      <Input type="text" id="rfid" autoFocus onChange={this.onChangeRfid} placeholder="RFID" required/>
                    <br></br><Button bsStyle="info" pullRight fill type="submit">
                      เพิ่ม
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
        <span>1.แตะบัตรที่เครื่องRFID reader</span><br></br>
        <span>2.กรอกข้อมูลให้ถูกต้องครบถ้วน</span><br></br>
        <span>3.กดเพิ่มรายชื่อนักศึกษา</span><br></br>
        <span>4.หากต้องการเช็คข้อมูลสามารถดูได้ในรายชื่อนักศึกษาทั้งหมด</span><br></br>
      </div>
    );
  }
}

export default AddStudent1;