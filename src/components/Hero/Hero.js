import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a full stack developer with proficiency in MERN stack. I also enjoy doing Competitive Programming, Data Structures and Math.
      </SectionText>
      <Button onClick={() => window.open('https://drive.google.com/file/d/1d4hGCsX90DsagzgyWETnmAKzD2T2EoY7/view?usp=sharing')}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;