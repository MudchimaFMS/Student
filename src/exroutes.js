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
import NotRegis from "views/AddStudent";

const exRoutes = [
  {
    path: "/regis/:rfid",
    name: "Add",
    icon: "pe-7s-bell",
    component: NotRegis,
    layout: "/admin"
  }
];

export default exRoutes;
