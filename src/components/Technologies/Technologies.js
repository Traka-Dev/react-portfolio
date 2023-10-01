import React from 'react';
import { DiApple, DiFirebase, DiReact } from 'react-icons/di';
import {FaEthereum} from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />    
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a Technologies in web and mobile app development. From Backend to Frontend.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Expreince with <br/> React.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Expreince with <br/> Node and PHP</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiApple size='3rem'/>
        <ListContainer>
          <ListTitle>Mobile Dev</ListTitle>
          <ListParagraph>Expreince with <br/> React Native</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaEthereum size='3rem'/>
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph>Expreince with <br/> Dapps and Solidity</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
