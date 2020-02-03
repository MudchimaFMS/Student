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
import React, { Component, Fragment } from "react";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Table
} from "react-bootstrap";
import axios from 'axios';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import moment from "moment";
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const format = "YYYY-MM-DDThh:mm"
class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            subject: '477-202',
            datestart: moment().hours(0).minutes(0).seconds(0).format(format),
            dateend: moment().add(1, 'days').hours(0).minutes(0).seconds(0).format(format)
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            datestart: moment(this.state.datestart, format).format(),
            dateend: moment(this.state.dateend, format).format(),
            subject: this.state.subject
        };
        console.log(data)
        axios.post('http://3.19.57.234:5000/reports/process', data)
            .then(res => {
                this.setState({ data: res.data })
                console.log(res.data)
                // this.setState({
                //     datestart: '',
                //     dateend: '',
                // })
            });
    }
    onChangeDateTime = e => {
        this.setState({ [e.target.name]: moment(e.target.value).format(format) }, () => {
            console.log(this.state)
        })
    }
    onChangeSubject = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            console.log(this.state)
        })
    }
    peopleList = (data) => {
        console.log('data', data)
        return <Fragment>{data.map(e =>
            <tr>
                <td>{e.FirstName}  {e.LastName}</td>
                <td>{e.Faculty}</td>
                <td>{e.Grade}</td>
                <td>{e.Subject}</td>
                <td>{e.Time}</td>
            </tr>)}
        </Fragment>
    }
    render() {
        const { datestart, data } = this.state
        // const classes = useStyles();

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Process"
                                content={
                                    <Fragment>
                                        <form
                                            // className={classes.container}
                                            onSubmit={this.onSubmit}
                                            noValidate>
                                            <TextField
                                                id="datetime-local"
                                                name="datestart"
                                                label="เวลาเริ่มต้น"
                                                type="datetime-local"
                                                defaultValue={this.state.datestart}
                                                onChange={this.onChangeDateTime}
                                                // className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <TextField
                                                id="datetime-local"
                                                name="dateend"
                                                label="เวลาสิ้นสุด"
                                                type="datetime-local"
                                                defaultValue={this.state.dateend}
                                                onChange={this.onChangeDateTime}
                                                // className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <span>รายวิชา</span>
                                            <select name="subject" id="subject" onChange={this.onChangeSubject}>
                                            <option>477-202</option>
                                            <option>477-302</option>
                                            </select>
                                            <Button bsStyle="info" pullRight fill type="submit">
                                                Submit
                                            </Button>
                                        </form>
                                        <Table striped hover>
                                            <thead>
                                                <tr>
                                                    <td>ชื่อ - นามสกุล</td>
                                                    <td>คณะที่ศึกษา</td>
                                                    <td>ชั้นปีการศึกษา</td>
                                                    <td>รายวิชา</td>
                                                    <td>เวลาที่เข้าเรียน</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.peopleList(data)}
                                            </tbody>
                                        </Table>
                                    </Fragment>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default AddStudent;
