import React from 'react';
import styled from "styled-components";

const NavFooter = styled.div`
    position: absolute;
    bottom: 0;
    background-color: #ffea60;
    display: flexbox;
    width: 100%;
    height: 80px;
    align-items: center; 

`;

const Texto = styled.h4`
    display: block;
    margin-right: 10px;
`;

export default function Footer(){
   return(
        <>
        <NavFooter>
            <Texto>Desenvolvido por Yan Rodrigues - ADS - FATEC 2023© Todos os direitos reservados.</Texto>
        </NavFooter>
        </>
    )
}