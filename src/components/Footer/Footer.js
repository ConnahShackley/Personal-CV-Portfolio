import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
        <LinkList>
        <LinkColumn>
        <LinkTitle>Mobile</LinkTitle>
        <LinkItem href="tel:07703 183 412">07703 183 412</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:contact@connah.s@hotmail.com">connah.s@hotmail.com</LinkItem>
        </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Please feel free to contact me at any time with regards to job opportunities. Thank you.</Slogan>
          </CompanyContainer>
          <SocialContainer>

        <SocialIcons href="https://github.com/ConnahShackley?tab=repositories">
          <AiFillGithub size="3rem" />
          </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/connah-shackley-275b8819b/">
          <AiFillLinkedin size="3rem" />
         </SocialIcons>
        <SocialIcons href="https://www.instagram.com/connah_shackley/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
