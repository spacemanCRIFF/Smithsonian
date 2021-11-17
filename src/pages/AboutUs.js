import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <About>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ScrollTop />
      </motion.div>
    </About>
  );
};

const About = styled(motion.div)`
  min-height: 90vh;
  width: 100vw;
`;

export default AboutUs;
