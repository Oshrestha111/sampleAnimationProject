import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import About from "./aboutUs/About";
import ContactUs from "./contactUs/ContactUs";
import Employee from "./employee/Employee.jsx";
import EmployeeInfo from "./employee/EmployeeInfo.jsx";
import Nav from "./home/nav/Nav.jsx";

const App = () => {
	return (
		<div>
			<Router>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='employee'>
						<Route index element={<Employee />} />
						<Route path='employeeInfo' element={<EmployeeInfo />} />
						<Route path=':id' element={<EmployeeInfo />} />
					</Route>

					<Route path='contactUs' element={<ContactUs />} />
					<Route path='*' element='Page not found' />
				</Routes>
				<footer>
					<hr></hr>
					<span>Copyright &copy; {new Date().getFullYear()}</span>
				</footer>
			</Router>
		</div>
	);
};

export default App;
