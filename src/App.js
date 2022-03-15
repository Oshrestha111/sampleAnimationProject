import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import ContactUs from "./contactUs/ContactUs";
import Employee from "./Employee";
import EmployeeInfo from "./EmployeeInfo";
import { FcBusinesswoman } from "react-icons/fc";
import { motion } from "framer-motion";

const App = () => {
	return (
		<div>
			<Router>
				<motion.nav
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.19, duration: 3 }}>
					<motion.ul
						initial={{ y: -350 }}
						animate={{ y: 0 }}
						transition={{
							delay: 0.2,
							duration: 3,
							type: "spring",
							stiffness: 150,
						}}>
						<motion.li whileHover={{ scale: 1.1, color: "#000" }}>
							<Link to='/'> Home</Link>
						</motion.li>
						<li>
							<Link to='/about'>About Us </Link>
						</li>
						<li>
							<Link to='/contactUs'>Contact Us</Link>
						</li>
						<li className='employee'>
							<Link to='/employee'>
								<FcBusinesswoman />
							</Link>
						</li>
					</motion.ul>
				</motion.nav>
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
