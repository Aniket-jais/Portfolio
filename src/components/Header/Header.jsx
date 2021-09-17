import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from '../../hooks/useMediaquery';
import { useHamberger } from '../../contexts/HambergerState';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 5rem;
    background: #000;
    color: white;
    display: flex;
    a{
        text-decoration: none;
        width: 70%;
    }
`;

const HeaderHambergerMenu = styled.img`
    margin-left: 1.9rem;
`;

const HeaderLogo = styled.h1`
    color: red;
`;

const HeaderNav = styled.nav`
    display: flex;
    width: 25%;
    justify-content: space-evenly;
    a{
        text-decoration: none;
        color: white;
        text-align: center;
        margin-top: 1.5rem;
    }
`;

export default function Header() {
    const isMobile = useMediaQuery("(max-width: 480px)");
    const { handleHamberger } = useHamberger();
    return (
        <HeaderWrapper>
            <Link to='/'>
                <HeaderLogo>AK</HeaderLogo>
            </Link>
            {!isMobile ?
                <HeaderNav>
                    <Link to='/' >Home</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/work' >Work</Link>
                    <Link to='/contact' >Contact</Link>
                </HeaderNav>
                :
                <HeaderHambergerMenu src='images/hamberger.png' alt='hamberger' onClick={handleHamberger} />
            }
        </HeaderWrapper>
    )
}