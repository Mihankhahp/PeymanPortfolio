import { useState } from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { initialState } from '../ActionCenter/Reducer';
const Home = () => {
  const [{ summary, name, timeLine, projects, technologies }, setState] = useState(initialState);

  return (
    <Layout>
      <Section grid>
        <Hero summary={summary} name={name} />
        <BgAnimation />
      </Section>
      <Projects projects={projects} />
      <Technologies technologies={technologies} />
      <Timeline timeLine={timeLine} />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
