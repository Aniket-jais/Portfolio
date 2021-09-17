import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../components/LinkButton/LinkButton';

const HomePageContentTitle = styled.p`
    color: white;
    font-size: 2.5rem;
    margin: 0px;
`;
const HomePageContentHeading = styled.p`
    color: white;
    font-size: 3.5rem;
    font-weight: bold;
`;


const HomePageContentWrapper = styled.div`
    position: absolute;
    top: 10rem;
    left: 8rem;
    @media(max-width: 768px){
        left: 4rem;
        top: 10rem;
    }
`;

const HomePageContentDesc = styled.p`
    color: white;
    font-size: 1.5rem;
`;

export default function Home() {
    return (
        <HomePageContentWrapper>
            <HomePageContentTitle>Hi, I'm Aniket</HomePageContentTitle>
            <HomePageContentHeading>Associate Technology L2 at Publicis Sapient</HomePageContentHeading>
            <HomePageContentDesc>Front-end Developer, Tech Savy✌️</HomePageContentDesc>
            <LinkButton path='/about'>Know more</LinkButton>
        </HomePageContentWrapper>
    )
}