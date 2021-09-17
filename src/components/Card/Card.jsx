import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    background: #1B1B1B;
    border-radius: 0.5rem;
    width: 100%;
    min-height: 40vh;
    margin: 1rem auto;
`;

const CardTitle= styled.p`
    color: white;
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
`;

const CardDesc = styled.p`
    color: white;
    font-size: 1.5rem;
    text-align: center;
`;

export default function Card({project,description,techStack}){
    return(
        <CardWrapper>
            <CardTitle>{project}</CardTitle>
            <CardDesc>{description}</CardDesc>
            <CardDesc>TechStack: {techStack}</CardDesc>
        </CardWrapper>
    )
}