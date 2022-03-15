import { motion } from "framer-motion";
import vid from "./assets/pexels-nothing-ahead-10505868.mp4";
import Cards from "./home/cards/Cards.jsx";

const Home = () => {
	return (
		<>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{
					fontSize: 80,
					color: "#fff",
					opacity: 1,
					originX: 0,
				}}
				transition={{ delay: 1, duration: 2 }}>
				Namaste and Welcome !!
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 2 }}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nobis
				deserunt eum harum reprehenderit, voluptatem optio inventore eos
				laboriosam modi. Tempora, architecto odio temporibus enim totam libero
				earum cupiditate aliquam. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Deserunt voluptas earum voluptates sequi expedita sit
				quibusdam provident? Inventore sint praesentium quaerat quia modi eum
				placeat assumenda illum, doloribus aliquid ea!
			</motion.p>
			<div className='vid-wrapper'>
				<motion.video
					autoPlay
					muted
					loop
					className='vid'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 4 }}>
					<source src={vid} type='video/mp4'></source>
				</motion.video>
			</div>
			<br />
			<Cards />
			<br />
			<Cards />
		</>
	);
};

export default Home;
