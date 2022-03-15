import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:5555555555'>555-555-555</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:jorge.jaime@protonmail.com'>jorge.jaime@protonmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at the time</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://linkedin.com'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://twitter.com'>
          <AiFillTwitterSquare size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
