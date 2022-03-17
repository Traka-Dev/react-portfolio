import styled from 'styled-components';

export const SectionLink = styled.section`
 width: 800px;
 height: 50px;
 display: ${(props) => props.hidden ? 'hidden' : 'flex'};
 justify-content: center;
 align-items: center;
 @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
 }
 @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
 }
`;