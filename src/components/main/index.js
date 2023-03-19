import React from 'react';
import styled from 'styled-components';
import Typewriter from "typewriter-effect";
import './style.css';
import yan from '../img/yan_png.png';
import curriculo from '../img/Curriculo - Yan.pdf'


const MainBox = styled.div`
    background-color: #c8c8c8;
    width: 100%
    display: flexbox;
    height: 390px;
    margin-left: 10%;
    margin-right: 10%
`;
const SubMainBox = styled.div`
    background-color: #e9e9e9;
    width: 100%
    display: flexbox;
    height: 200px;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
`;
const Container25 = styled.div`
display: block;
width: 100%;
height: 48%;
aling-itens: center;
margin-left: 20px;
padding: 10px;
`;
const Container75 = styled.div`
display: block;
width: 100%;
height: 52%;
aling-itens: center;
padding: 10px;
margin-left: 20px;
margin-bottom: 10px
`;

export default function(){
    return(
        <>
        <MainBox className='box1'>
            <Container25 className='container1'>
                <img src={yan} className='foto' />
            </Container25>
            <Container75 className='container2'>
            <h1><Typewriter
                onInit={(typewriter)=> {
                typewriter
                .typeString("I am Yan Pablo Rodrigues")
                .pauseFor(1000)
                .start();
                }}
                />
            </h1>

            <h4>Presidente Prudente - SP</h4>
            <h4><a href='tel:+55018996234279'>(018) 99623-4279</a></h4>
            <h4><a href='mailto:yan.pablo205@gmail.com'>yan.pablo205@gmail.com</a></h4>
            <h4>GitHub - <a href='https://github.com/yanrodrigues205'>yanrodrigues205</a></h4>
            <h4><a href={curriculo} download>Download Curriculo</a></h4>
            </Container75>
        </MainBox>

        <SubMainBox className='box2'>
            <div className='texto'>
            <h2>Formação Profissional:</h2>
            <h4>Tecnico em Analise e Desenvolvimento de Sistemas - Dr Prof Antonio E. Toledo</h4>
            <h4>Cursando  Tecnologo em Analise e Desenvolvimento de Sistemas - FATEC</h4> 
            <h2>Ocupação Profissional: </h2>
            <h4>Estagiario em Programacao Back-End PhP</h4>
            </div>
        </SubMainBox>
        </>
    )
}