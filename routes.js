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
import ListStudent from "views/ListStudent.jsx";
import AddStudent from "views/AddStudent.jsx";

const dashboardRoutes = [
  {
    path: "/checkin",
    name: "Check in",
    icon: "pe-7s-graph",
    component: CheckIn,
    layout: "/admin"
  },
  {
    path: "/list",
    name: "List Student",
    icon: "pe-7s-graph",
    component: ListStudent,
    layout: "/admin"
  },
  {
    path: "/add",
    name: "Add Student",
    icon: "pe-7s-user",
    component: AddStudent,
    layout: "/admin"
  },
];

export default dashboardRoutes;
