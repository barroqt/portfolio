import React from "react";
import { DiFirebase, DiRust, DiScrum } from "react-icons/di";
import { AiFillAudio } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiRust size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming languages</ListTitle>
          <ListParagraph>
            Typescrit, Javascript, Rust, Solidity, C, C++, Python, Ruby
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            AWS, Node.js, React.js, Next.js, Postgresql, Docker, Jenkins, Redis,
            GraphQL, Ruby on Rails, Tensorflow, Keras
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiScrum size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Methodology</ListTitle>
          <ListParagraph>
            Scrum <br />
            TDD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiFillAudio size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Spoken languages</ListTitle>
          <ListParagraph>
            French (native) <br />
            English (fluent) <br />
            Mandarin Chinese (advanced) <br />
            Portuguese (advanced)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
