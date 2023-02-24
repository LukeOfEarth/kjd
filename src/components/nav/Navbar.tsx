import React from 'react';
import styled from 'styled-components';

export const Navbar : React.FC = () => {

    return (
        <>
            <_Navbar>

            </_Navbar>
        </>
    );
}

const _Navbar = styled.nav`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 80px;
    padding: 0 80px;
    background-color: var(--color-primary);
`;