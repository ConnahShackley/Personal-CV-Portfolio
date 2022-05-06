import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2017, text: 'Distinction in Creative Media'},
  { number: 2020, text: 'Diploma in AI and Technology (online)', },
  { number: 2021, text: 'Ba Hons in Games programming/Computer Science', },
  { number: 2022, text: 'Graduated from CodeNation Javascript course', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Academic Qualifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
