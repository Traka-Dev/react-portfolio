import React from "react"
import Link from "next/link"
import {
  BlogCard,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles"
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { projects } from "../../constants/projects"

const hasbutton = (visit, source) => {
  let valid = true
  if (visit === "" || visit === undefined || visit === " " || visit === null)
    valid = false
  return (
    <>
      <UtilityList>
        {valid ? (
          <ExternalLinks href={visit} target="_blank" rel="nofollow">
            Visit
          </ExternalLinks>
        ) : null}
        <Link href={source} passHref>
          <ExternalLinks>Details</ExternalLinks>
        </Link>
      </UtilityList>
    </>
  )
}

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <div style={{ marginTop: "2rem" }}>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          {hasbutton(visit, source)}
        </BlogCard>
      )).reverse()}
    </GridContainer>
  </Section>
)

export default Projects
