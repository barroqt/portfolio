import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Thomas Barroqueiro <br />
          Back end developer
        </SectionTitle>
        <SectionText>
          Initially full-stack javascript developer, with a preference for back end. <br />
          Self taught in Rust and Solidity <br />
          I am now Looking for a company working with blockchain technologies.
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