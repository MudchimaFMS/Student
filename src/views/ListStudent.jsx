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

const PeopleList = props => (
    <tr>
        <td>{props.person.studentid}</td>
        <td>{props.person.FirstName}  {props.person.LastName}</td>
        <td>{props.person.Faculty}</td>
        <td>{props.person.Grade}</td>
        <td>{props.person.Subject}</td>
    </tr>
)
class ListStudent extends Component {
  constructor(props){
    super(props);

    //this.deleteRoomsList = this.deleteRoomsList.bind(this);

    this.state = {
        people: [],
    };
}

componentDidMount(){
    axios.get('http://localhost:5000/persons/')
        .then(response => {
            this.setState({
                people: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
}


peopleList(){

    return this.state.people.map(currentperson => {
        return <PeopleList person={currentperson} key={currentperson._id}/>;
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
                title="รายชื่อนักศึกษา"
               
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
                        <td>รายวิชา</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.peopleList()}
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

export default ListStudent;
