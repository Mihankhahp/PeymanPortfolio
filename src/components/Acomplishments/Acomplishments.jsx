import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxTitle, BoxText } from "./AcomplishmentsStyles";

const data = [
  { title: "JavaScript", text: "Linkedin Skill Assesments" },
  { title: "Python", text: "Linkedin Skill Assesments" },
  { title: "Front-End Development", text: "Linkedin Skill Assesments" },
  { title: "React.js", text: "Linkedin Skill Assesments" },
  { title: "Data Analysis", text: "Google/Coursera Certificate" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achivements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxTitle>{card.title}</BoxTitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
