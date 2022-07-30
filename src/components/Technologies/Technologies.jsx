import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
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

const Technologies = ({ technologies }) => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      {technologies.map((item, i) => (
        <ListItem>
          <ListContainer>
            <ListTitle>{item.title}</ListTitle>
            {item.subtitle.map((sub, index) => (
              <ListParagraph key={index}>{sub}</ListParagraph>
            ))}
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);
export default Technologies;
