import React from "react";
import { skills } from "./skillSet";
import styled from 'styled-components';
import Slider from '@mui/material/Slider';


const SkillsWrapper = styled.main`
    width: 60%;
    display: flex;
    flex-direction: column;
    color: white;
    margin: auto;
    
    @media(max-width: 480px){
        width: 90%;
    }
`;

const SkillsTitle = styled.p`
    font-size: 4rem;
    font-weight: bold;
`;

export default function Skills() {
    return (
        <SkillsWrapper>
            <SkillsTitle>Skills Rated out of 100</SkillsTitle>
            {
                (skills || []).map(item => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <Slider defaultValue={item.rating} aria-label="Default" valueLabelDisplay="auto" />

                        </div>
                    )

                })
            }
        </SkillsWrapper>
    )
}