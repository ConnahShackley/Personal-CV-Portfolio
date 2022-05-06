import Link from 'next/link'; // Link to different pages and sections in cv portfolio
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di'; // icons from react icons package

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'; // styled components from HeaderStyles.js

const Header = () =>  (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '15px'}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
          </li>
          <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
          </li>
          <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
          </li>
          
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ConnahShackley?tab=repositories">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/connah-shackley-275b8819b/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/connah_shackley/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>

);

export default Header;
