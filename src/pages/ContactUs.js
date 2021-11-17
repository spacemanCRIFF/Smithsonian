import React from "react";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnim,
  titleAnim,
  sliderContainer,
  slider,
} from "../animation";
import styled from "styled-components";
import spaceMuseum1 from "../img/smithsonian.jpg";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Grid>
        <Align>
          <Title>
            <Hide>
              <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
            </Hide>
          </Title>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://airandspace.si.edu/connect"
              >
                <h2>Official Air & Space Contact Page</h2>
              </a>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.si.edu/museums"
              >
                <h2>Other Museums, Galleries, and Zoo</h2>
              </a>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.ihg.com/smithsonian-19-museums"
              >
                <h2>IHG Ultimate Guide to All 19 Museums</h2>
              </a>
            </Social>
          </Hide>
        </Align>
        <Image>
          <motion.img
            variants={photoAnim}
            src={spaceMuseum1}
            alt="space shuttle exhibit"
          />
        </Image>
      </Grid>
    </ContactStyle>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 60% 40%;
  grid-template-rows: repeat(1, [row] auto);
`;
const Align = styled(motion.div)`
  grid-column: 1;
  grid-row: 1;
  position: relative;
`;

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  width: 100vw;
  @media (max-width: 1500px) {
    padding: 4rem 2rem 4rem 2rem;
    font-size: 1rem;
    position: fixed;
  }
`;
const Title = styled.div`
  margin-bottom: 3rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 2rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  a {
    color: #23d997;
  }
  h2 {
    margin: 2rem;
    font-size: 5.5vh;
  }
`;
const Image = styled.div`
  grid-column: 2;
  grid-row: 1;
  position: relative;
  justify-content: center;
  z-index: 2;
  flex: 1;
  margin-bottom: 15vh;
  overflow: hidden img {
    width: 80%;
    height: 60vh;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: rgb(217, 110, 212);
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #1b7960;
`;
const Frame3 = styled(Frame1)`
  background: #23d997;
`;
const Frame4 = styled(Frame1)`
  background: #1b7079;
`;

export default ContactUs;
