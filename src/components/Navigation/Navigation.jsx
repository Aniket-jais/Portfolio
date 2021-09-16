import React from "react";
import styled from "styled-components";
import { menuItem } from "./NavigationMenuItem";
import { useHamberger } from "../../contexts/HambergerState";
import { useNavigation } from "../../hooks/useNavigation";

const NavigationWrapper = styled.aside`
    width: 100%;
    height: 100vh;
    background: black;
`;

const NavigationMenu = styled.div`
    width: 100%;
    height: 1.7rem;
    background: black;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 1rem;
    text-transform: capitalize;
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
    
        </NavigationWrapper>
    )
}