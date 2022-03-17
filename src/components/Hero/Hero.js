import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I let my work speak for myself so I share my latest projects.
      </SectionText>
      <Button onClick={() => window.location = '#contact'}>Let's Work Together</Button>
    </LeftSection>
  </Section>
);

export default Hero;