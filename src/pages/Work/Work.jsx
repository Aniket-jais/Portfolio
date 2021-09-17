import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import { workList } from "./workLits";

const WorkWrapper = styled.div`
    width: 100%;
    color: white;
`;
const WorkTitle = styled.p`
    font-size: 4rem;
    color: white;
    text-align: center;
`;
export default function Work() {

    return (
        <WorkWrapper>
            <WorkTitle>BFSI and Retail Platforms</WorkTitle>
            {
                (workList || []).map(item => {
                    return <Card key={item.id} {...item} />
                })
            }

        </WorkWrapper>
    )
}