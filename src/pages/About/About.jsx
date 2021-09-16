import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
    width: 100%;
`;

const AboutHeading = styled.p`
    font-size: 3.5rem;
    color: white;
    text-align: center;
    font-weight: bold;

`;
const AboutDesc = styled.p`
    font-size: 1.3rem;
    color: white;
    text-align: center;
`;

export default function About() {
    return (
        <AboutWrapper>
            <AboutHeading>I build value by User Experience.</AboutHeading>
            <AboutDesc>I’m Aniket Kumar, but you can just call me Aniket.</AboutDesc>
            <AboutDesc>Originally hailing from Jharkhand, India for the last decade or so I’ve been honing my skills in
                frond-end technoligies React.js, Redux, JavaScript, TypeScript, Html, Css, Git
                and web-technology roles building products for the web</AboutDesc>
            <AboutDesc>I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies
                in mind for implementation, scalability and developer sanity.</AboutDesc>
            <AboutDesc>I’ve worked with small, agile teams on P&G projects and larger
                development teams with product lifecycles spanning multiple years.</AboutDesc>
        </AboutWrapper>
    )
}