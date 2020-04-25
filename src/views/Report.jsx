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
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import axios from 'axios';

const ReportList = props => (
    <tr>
        <td>{props.report.studentid}</td>
        <td>{props.report.FirstName}  {props.report.LastName}</td>
        <td>{props.report.Faculty}</td>
        <td>{props.report.Grade}</td>
        <td>{props.report.Time}</td>
    </tr>
)
class Report extends Component {
  constructor(props){
    super(props);

    //this.deleteRoomsList = this.deleteRoomsList.bind(this);

    this.state = {
        report: [],
    };
}

componentDidMount(){
    axios.get('http://3.23.89.167:5000/reports/')
        .then(response => {
            this.setState({
                report: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
}


reportList(){
    return this.state.report.reverse().map(currentreport => {
        return <ReportList report={currentreport} key={currentreport._id}/>;
    })
}
  render() {
    this.componentDidMount();
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="รายชื่อนักศึกษาทั้งหมด"
                
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <td>รหัสนักศึกษา</td>
                        <td>ชื่อ - นามสกุล</td>
                        <td>คณะที่ศึกษา</td>
                        <td>ชั้นปีการศึกษา</td>
                        <td>เวลาที่เข้าเรียน</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.reportList()}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Report;
