import React from 'react';
import styled from 'styled-components';
import './effect.css';

const Body = styled.body`
padding:0;
margin: 0;
box-sizing: border-box;
`
const MainNav =  styled.div`
background-color:  #f48c24;
width: 100%;
display: flexbox;
justify-content: space-between;
align-items: center; 
height: 110px;

`;

const HeaderNav =  styled.div`
background-color: #7f3c3c;
width: 100%;
display: flexbox;
height: 50px;
`;

const FooterNav = styled.div`
background-color: #ffea60;
width: 100%;
display: flexbox;
height: 50px;
justify-content: space-between;
align-items: center; 
`;
const H2 = styled.h2`
color: #7f3c3c;
font-size: 45px;
`;

export default function Header(){

 return(
   
    <>
    <HeaderNav className='left-move'></HeaderNav>
    <MainNav className='right-move'><H2>Currículo Vitae</H2></MainNav>
    <FooterNav className='left-move'></FooterNav>
    </>
 )
};