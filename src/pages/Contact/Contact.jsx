import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.section`
    width: 100%;
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

export default function Contact() {
    return (
        <ContactWrapper>
            <ContactHeading>Let's talk.</ContactHeading>
            <ContactDesc>Get in touch by emailing at anijais1996@gmail.com</ContactDesc>
        </ContactWrapper>
    )
}