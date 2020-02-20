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
import Process from "views/Process.jsx";

const dashboardRoutes = [
  {
    path: "/checkin",
    name: "เช็คชื่อเข้าชั้นเรียน",
    icon: "pe-7s-credit",
    component: CheckIn,
    layout: "/admin"
  },
  {
    path: "/report",
    name: "รายงานการเข้าชั้นเรียนปัจจุบัน",
    icon: "pe-7s-note2",
    component: Report,
    layout: "/admin"
  },
  {
    path: "/list",
    name: "รายชื่อนักศึกษาทั้งหมด",
    icon: "pe-7s-news-paper",
    component: ListStudent,
    layout: "/admin"
  },
  {
    path: "/add",
    name: "เพิ่มรายชื่อนักศึกษา",
    icon: "pe-7s-add-user",
    component: AddStudent1,
    layout: "/admin"
  },
  {
    path: "/process",
    name: "รายงานการเข้าชั้นเรียนย้อนหลัง",
    icon: "pe-7s-date",
    component: Process,
    layout: "/admin"
  },
];

export default dashboardRoutes;
