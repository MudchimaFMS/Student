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
import CheckIn from "views/CheckIn.jsx";
import Report from "views/Report.jsx";
import ListStudent from "views/ListStudent.jsx";
import AddStudent1 from "views/AddStudent1.jsx";

const dashboardRoutes = [
  {
    path: "/checkin",
    name: "Check In",
    icon: "pe-7s-home",
    component: CheckIn,
    layout: "/admin"
  },
  {
    path: "/report",
    name: "report",
    icon: "pe-7s-graph",
    component: Report,
    layout: "/admin"
  },
  {
    path: "/list",
    name: "List Student",
    icon: "pe-7s-usb",
    component: ListStudent,
    layout: "/admin"
  },
  {
    path: "/add",
    name: "Add Student",
    icon: "pe-7s-user",
    component: AddStudent1,
    layout: "/admin"
  },
];

export default dashboardRoutes;
