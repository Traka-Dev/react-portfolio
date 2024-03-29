import styled from 'styled-components';

export const Img = styled.img `
  width:350px;
  height:200px;
  object-fit: contain;
  overflow: hidden;
`

export const GridContainer = styled.section `
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 5rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div `
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.8);;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 400px;
  min-height:100%;
  :hover{
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div `
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3 `
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr `
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div `
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const UtilityList = styled.ul `
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a `
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.div `
display: flex;
justify-content: center;
padding: 2rem;
`
export const Tag = styled.span `
color: #d8bfbf;
font-size: 1.5rem;
padding: 1rem;
`