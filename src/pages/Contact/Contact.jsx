import React from "react";
import styled from "styled-components";
import LinkButton from "../../components/LinkButton/LinkButton";

const ContactWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ContactHeading = styled.p`
    font-size: 3.5rem;
    color: white;
    font-weight: bold;
    text-align: center;
`;
const ContactDesc = styled.p`
    font-size: 1.5rem;
    color: white;
    text-align: center;
`;
const ContactLink = styled.a`
    text-decoration: none;
    color: orange;
    font-size: 1.5rem;
`;

export default function Contact() {
    return (
        <ContactWrapper>
            <ContactHeading>Let's talk.</ContactHeading>
            <ContactDesc>Get in touch by emailing at anijais1996@gmail.com</ContactDesc>
            <ContactLink href='https://www.linkedin.com/in/aniket-kumar-374817185'>LinkedIn Profile</ContactLink>
        </ContactWrapper>
    )
}