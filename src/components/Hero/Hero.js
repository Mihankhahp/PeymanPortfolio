import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = ({ summary, name }) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi <br />
        I'm {name}
      </SectionTitle>
      <SectionText>
        {summary}
      </SectionText>
      <Button
        onClick={() =>
        (window.location =
          "https://www.linkedin.com/in/peyman-mihankhah-507b26192/")
        }
      >
        More about me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
