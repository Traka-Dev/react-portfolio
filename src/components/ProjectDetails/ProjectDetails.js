import React from 'react';
import {useRouter} from 'next/router';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {ExternalLinks} from '../Projects/ProjectsStyles'
import {SectionLink} from './ProjectStyles'

const ProjectDetails = () =>{
    const { asPath } = useRouter()
    let project = []
    const getContent = () => {
        switch(asPath) {
            case '/project?=sargapay': 
                project = projects.find(index => index.id === 7);                                               
                break
            case '/project?=web3': 
                project = projects.find(index => index.id === 6);                                               
                break
            case '/project?=voting': 
                project = projects.find(index => index.id === 5);                                               
                break
            case '/project?=inventory': 
                project = projects.find(index => index.id === 4);                                               
                break
            case '/project?=ecommerce': 
                project = projects.find(index => index.id === 3);                                               
                break                            
            case '/project?=multiplataform_app':   
                project = projects.find(index => index.id === 2);                             
                break
            case '/project?=marketplace': 
                project = projects.find(index => index.id === 1);                                               
                break
                case '/project?=businessweb': 
                project = projects.find(index => index.id === 0);                                               
                break
            default:
                return (
                <div style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center'}}>
                    <SectionTitle main>Contact Me</SectionTitle>
                </div>)                
        }   

        const hasLink = (link) => {
            if( link === '' || link === undefined || link === ' ' || link === null) {
                return (
                <SectionLink hidden>
                    <ExternalLinks href={link}>Visit</ExternalLinks>
                </SectionLink>
                );
            }     
            return (      
            <SectionLink>
                <ExternalLinks href={link} target='_blank' rel='nofollow'>Visit</ExternalLinks>
            </SectionLink>
            );
        }

        const desc = project.long_desc.split('<salto>')
        return(   
            <>
            <SectionTitle main>{project.title}</SectionTitle> 
            <div style={{margin:'10px'}}>           
            {desc.map(e => (<SectionText justify key={e.id}>{e}</SectionText>))}                                       
            {hasLink(project.visit)}
            </div>
            </>
        )
    }  

    return (
        <Section>
            {getContent()}
        </Section>
    )
}


export default ProjectDetails

