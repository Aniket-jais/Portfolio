import React from "react";
import styled from "styled-components";
import { useHamberger } from "../../contexts/HambergerState";
import Navigation from "../Navigation/Navigation";

const LayoutWrapper = styled.main`
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background-image: url(https://uploads-ssl.webflow.com/591e9525f13786217f2e347e/5b47654a49f3e1543ba2a603_180712%20-%20background.jpg);
    @media(max-width: 768px){
        background-position: right;
    }
`;
export default function Layout({ children }) {
    const { open } = useHamberger();
    return (
        <>
            {
                open ? <Navigation />
                    :
                    <LayoutWrapper>
                        {children}
                    </LayoutWrapper>
            }

        </>

    )
}