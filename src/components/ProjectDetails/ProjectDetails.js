import React from "react"
import { useRouter } from "next/router"
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { projects } from "../../constants/projects"
import { ExternalLinks } from "../Projects/ProjectsStyles"
import { SectionLink } from "./ProjectStyles"

const ProjectDetails = () => {
  const { asPath } = useRouter()
  let project = []
  const getContent = () => {
    let foundProject = projects.find(index => index.source === asPath)
    if (foundProject) {
      project = foundProject
    } else {
      return (
        <div
          style={{
            minHeight: "50vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SectionTitle main> Contact Me </SectionTitle>{" "}
        </div>
      )
    }

    const hasLink = link => {
      if (link === "" || link === undefined || link === " " || link === null) {
        return null
      }
      return (
        <SectionLink>
          <ExternalLinks href={link} target="_blank" rel="nofollow">
            {" "}
            Visit{" "}
          </ExternalLinks>{" "}
        </SectionLink>
      )
    }

    const desc = project.long_desc.split("<salto>")
    return (
      <>
        <SectionTitle main> {project.title} </SectionTitle>{" "}
        {desc.map(e => (
          <SectionText justify key={e.id}>
            {" "}
            {e}{" "}
          </SectionText>
        ))}{" "}
        {hasLink(project.visit)}{" "}
      </>
    )
  }

  return <Section> {getContent()} </Section>
}

export default ProjectDetails
