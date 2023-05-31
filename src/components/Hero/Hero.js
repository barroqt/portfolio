import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Thomas Barroqueiro <br />
          Back end developer
        </SectionTitle>
        <SectionText>
          My professional experience spans across frontend, backend, and
          blockchain development.
          <br />
          Having taught myself Rust and Solidity, my passion is driven by a
          thirst for constant learning.
          <br />
          In my view, the best way to grow and improve is to immerse oneself in
          a community of knowledgeable and skilled individuals.
          <br />I am actively seeking a new project to contribute my skills and
          passion to.
        </SectionText>
        <AiOutlineMail size="3rem" />
        <SectionText>barroqt@gmail.com</SectionText>
        <AiOutlinePhone size="3rem" />
        <SectionText>+33 6 43 02 16 09</SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
