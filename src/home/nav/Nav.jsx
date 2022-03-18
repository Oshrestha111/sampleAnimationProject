import React from "react";
import { Link } from "react-router-dom";
import { FcBusinesswoman } from "react-icons/fc";
import { motion } from "framer-motion";
import "./nav.css";

const navVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.19,
			duration: 3,
		},
	},
};

// hidden vaneko initial ma visible vaneko animate, animate mai transition embed gareyxi no need to write again

const ulVariants = {
	hidden: {
		y: -350,
	},
	visible: {
		y: 0,
		transition: {
			delay: 0.2,
			duration: 3,
			type: "spring",
			stiffness: 150,
		},
	},
};

const Nav = () => {
	return (
		<div>
			{/* variants lekhe paxi initial ra hidden parent div lai diye paxi child ley tyei linxa.  */}
			<motion.nav variants={navVariants} initial='hidden' animate='visible'>
				<motion.ul variants={ulVariants}>
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
