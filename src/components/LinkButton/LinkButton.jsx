import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButtonWrapper = styled.div`
    a{
        text-decoration: none;
        color: #f0860c;
        font-size: 1.5rem;
    }
`;
export default function LinkButton({ children, path }) {
    return (
        <LinkButtonWrapper>
            <Link to={path}>
                {children}
            </Link>
        </LinkButtonWrapper>

    )
}