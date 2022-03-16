import React from 'react';
import {useRouter} from 'next/router';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {project_img} from './ProjectStyles.js';
import { projects } from '../../constants/constants';


const ProjectDetails = () =>{
    const { asPath } = useRouter()
    let project = []
    const getContent = () => {
        switch(asPath) {
            case '/project?=ecommerce': 
                project = projects.find(index => index.id === 3);                                               
                break                            
            case '/project?=multiplataform_app':                                
                break
            default:
                return (
                <SectionTitle main>Contact Me</SectionTitle>

                )                
        }        
        const desc = project.long_desc.split('<salto>')
        return(   
            <>
            <SectionTitle main>{project.title}</SectionTitle>
            {desc.map(e => (<SectionText key={e.id}>{e}</SectionText>))}      
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

