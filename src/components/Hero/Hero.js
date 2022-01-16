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
          Initially full-stack developer, I switched my focus to web3 and smart contracts.<br />
          Self taught in Rust and Solidity, I also learned a lot about the blockchain ecosystem as a whole.<br />
          I am now looking for a company working in this field.
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