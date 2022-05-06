import React from 'react';
import { useCallback } from 'react/cjs/react.production.min';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Connah's Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this Portfolio is to showcase my technical skills using HTML/CSS, Javascript and React.js when developing applications. Also, the portfolio also contains details about Me, my academic qualifications, and my previous Javascript Projects which can be found on my GitHub reposiroties page.
      </SectionText>
      <Button>Get in Touch</Button>
    </LeftSection>
  </Section>

);

export default Hero;