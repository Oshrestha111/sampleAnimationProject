import "./cards.css";
import { cardDetails } from "../cards/CardDetails.jsx";
import { motion } from "framer-motion";
// import {  useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

const Cards = () => {
	// const { ref, inView } = useInView({threshold:0.2}); 0.2=20%
	// const animation= useAnimation();
	// useEffect(() => {
	// 	console.log("use effec in view", inView);
	// 	if (inView) {
	// 		animation.start({
	// 			opacity: 1, y: items.y
	// 		})
	// 	}
	// 	if(!inView){
	// 		animation.start({opacity: 0, y: 0 })
	// 	}
	// }, [inView]);

	return (
		<>
			{/* ref={ref}  ref incase using hooks*/}
			<div className='cards'>
				{cardDetails.map((items, index) => (
					<motion.div
						initial={{ opacity: 0, y: 0 }}
						whileInView={{ opacity: 1, y: items.y }}
						transition={{ delay: items.delay, duration: 2 }}>
						<div className='card' key={index}>
							<img
								src={items.pic}
								alt='Avatar'
								style={{ width: items.width }}
							/>

							<div className='container'>
								<h4>
									<b>{items.name}</b>
								</h4>
								<p>{items.occupation}</p>
								<p>{items.info}</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default Cards;
