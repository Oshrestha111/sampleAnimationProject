import { motion } from "framer-motion";
import MapEg from "../MapEg";
import "./about.css";

const About = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, fontSize: 30 }}
        animate={{
          color: "#fff",
          opacity: 1,
          fontSize: 40,
        }}
        transition={{ delay: 0.1, duration: 2 }}
      >
        About Us
      </motion.h2>
      <div>
        <p>
          <b>This is about page</b>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore natus
          quae quis sequi perferendis ex quo accusamus, autem fugit esse
          voluptates rerum, sunt illum, ad vero veritatis aliquid odio mollitia
          adipisci quia! Sunt maxime nobis illo incidunt suscipit esse enim
          deleniti eum? Rerum unde doloremque blanditiis ducimus excepturi
          doloribus laboriosam?
          <br />
        </p>
        <div className="about-bg-img">
          <div className="about-texts">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 15 }}
              transition={{ delay: 0.4, duration: 3 }}
            >
              <h1>We care about You</h1>
              <h2>Come Join Us</h2>
              <i>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat, earum.
              </i>
            </motion.div>
          </div>
        </div>
        <div className="map">
          <MapEg />
        </div>
        <p style={{ marginTop: "50px" }}>
          <b>This is about page</b>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore natus
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam
          autem blanditiis eum minus facere nulla nemo, beatae quaerat excepturi
          deleniti quam labore accusantium molestiae quasi provident eveniet
          natus doloremque.
        </p>
        <p style={{ marginTop: "50px" }}>
          <b>This is about page</b>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore natus
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam
          autem blanditiis eum minus facere nulla nemo, beatae quaerat excepturi
          deleniti quam labore accusantium molestiae quasi provident eveniet
          natus doloremque.
        </p>
      </div>
    </>
  );
};

export default About;
