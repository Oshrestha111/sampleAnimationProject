import React from "react";
import { Link } from "react-router-dom";
import { FcBusinesswoman } from "react-icons/fc";
import { motion } from "framer-motion";
import "./nav.css";

const Nav = () => {
	return (
		<div>
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
		</div>
	);
};

export default Nav;
