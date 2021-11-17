import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diagram from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import lunarMod from "../img/lunarMod1.1.jpeg";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSections = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Visit the<span> IMAX</span> Theater to
          <span> ESCAPE</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clockIcon" />
              <h3>Hours:</h3>
            </div>
            <p>Th-M, 10 a.m. to 5:30 p.m.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamworkIcon" />
              <h3>Family:</h3>
            </div>
            <p>Enjoy Interactive Exhibits!</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diagram} alt="diagramIcon" />
              <h3>IMAX:</h3>
            </div>
            <p>Out of this world theatre!</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="moneyIcon" />
              <h3>Admission:</h3>
            </div>
            <p>Admission is currently free.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={lunarMod} alt="lunar lander with spaceman" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%auto;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSections;
