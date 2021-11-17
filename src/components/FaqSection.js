import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        FAQ: Any <span>Questions?</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Location?">
          <div className="answer">
            <p>655 Jefferson Drive, SW Washington, DC</p>
            <p>
              The Smithsonian Institution is the world's largest museum,
              education, and research complex.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="answer">
            <p>Thursday through Monday 10 a.m. t0 5:30 p.m.</p>
            <p>
              Bring the whole family and enjoy interactive exhibits, authentic
              displays, and flight-related artifacts.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?">
          <div className="answer">
            <p>Admission is currently free.</p>
            <p>
              The gift shops, snackbars, and cafes accept all major credit cards
              as well as cash.
            </p>
          </div>
        </Toggle>
        <Toggle title="Other Smithsonian Institute Museums?">
          <div className="answer">
            <p>
              National Museum of African American History and Culture, National
              Museum of African Art, Smithsonian American Art Museum
            </p>
            <p>
              National Museum of the American Indian, National Museum of
              American History, Cooper Hewitt: Smithsonian Design Museum, Arts
              and Industries Building, Anacostia Community Museum, Archives of
              American Art: Lawrence A. Fleischman Gallery
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%auto;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem, 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
