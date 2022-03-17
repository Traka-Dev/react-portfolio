import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const hasbutton = (visit, source) => {
  let valid = true;
  if( visit === '' || visit === undefined || visit === ' ' || visit === null) valid = false;
  return (
    <>
    <UtilityList>    
      {valid ? <ExternalLinks href={visit} target='_blank' rel='nofollow'>Visit</ExternalLinks> : null}
      <ExternalLinks href={source}>Details</ExternalLinks>
    </UtilityList>
    </>
  )
}

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />            
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div style={{marginTop: '2rem'}}>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          {hasbutton(visit, source)}
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;