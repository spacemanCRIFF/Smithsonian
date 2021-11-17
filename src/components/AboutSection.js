import React from "react";
import spaceMuseum1 from "../img/mainIMG.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Smithsonian</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Air</span> & <span>Space</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Museum:</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Launch into the history of flight by surrounding yourself with icons
          of air and space travel; including aircraft, spacecraft, missiles,
          rockets, and more...
        </motion.p>
        <Link to="/work">
          <motion.button variants={fade}>View Exhibits</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={spaceMuseum1}
          alt="space shuttle exhibit"
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
