import React from "react";
import styled from "styled-components";
import { menuItem } from "./NavigationMenuItem";
import { useHamberger } from "../../contexts/HambergerState";
import { useNavigation } from "../../hooks/useNavigation";

const NavigationWrapper = styled.aside`
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavigationMenu = styled.div`
    width: 100%;
    height: 1.7rem;
    background: black;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 2.5rem;
    text-transform: capitalize;
`;

const NavigationMenuButton = styled.span`
    border-radius: 50%;
    background: white;
    padding:1rem 1.3rem;
    margin-top: 3rem;
`;

export default function Navigation(){
    const { handleHamberger } = useHamberger();
    const handleNavigation = useNavigation();

    return(
        <NavigationWrapper>
            {
                (menuItem || []).map(item=>{
                    return <NavigationMenu key={item.id} onClick={()=>{handleHamberger(); handleNavigation(item.path)}}>{item.name}</NavigationMenu>
                }) 
            }
            <NavigationMenuButton onClick={handleHamberger}>X</NavigationMenuButton>
        </NavigationWrapper>
    )
}