import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn id='contact'>
          <LinkTitle>Let's Chat</LinkTitle>
          <LinkItem href='https://discord.gg/jwmxMcdxrj'>Discord Server</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:trakadev@protonmail.com'>trakadev@protonmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at the time</Slogan>
        </CompanyContainer>
        <div style={{display: "flex", justifyContent: 'space-around'}}>
        <SocialIcons href='https://github.com/Traka-Dev' target='_blank' rel='nofollow'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/jorge-luis-jaime-s%C3%A1nchez-6a136a75/' target='_blank' rel='nofollow'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/trakadev' target='_blank' rel='nofollow'>
          <AiFillTwitterSquare size='3rem' />
        </SocialIcons>
        </div>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
