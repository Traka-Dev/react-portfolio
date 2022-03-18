import Link from 'next/link';
import React from 'react';
import { AiFillGithub,AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaCodeBranch } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


//TODO: Responsive Hamburger Menu

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems:'center', color: 'white', marginBottom:'10px'}}>
          <FaCodeBranch size='3rem'/><Span>Portfolio</Span>
          </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='/#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Traka-Dev' target='_blank' rel='nofollow'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/jorge-luis-jaime-s%C3%A1nchez-6a136a75/' target='_blank' rel='nofollow'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/trakadev' target='_blank' rel='nofollow'>
        <AiFillTwitterSquare size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
