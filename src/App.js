import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './Globalstyle';
import Question from './Question';
import Footer from './Footer';

//import iconeCerto from "./img/icone_certo.png"
//import iconeErro from "./img/icone_erro.png"
//import iconeQuase from "./img/icone_quase.png"
import logo from "./img/logo.png"
//import party from "./img/party.png"
//import sad from "./img/sad.png"
//import setaVirar from "./img/seta_virar.png"


//<img src={iconeCerto} alt="" />
//<img src={iconeErro} alt="" />
//<img src={iconeQuase} alt="" />
//<img src={party} alt="" />
//<img src={sad} alt="" />
//<img src={setaVirar} alt="" />

export default function App() {

    return (

        <Container>
            <GlobalStyle />
            <Logo>
                <LogoImg src={logo} alt="" />
                <h1>ZappRecall</h1>
            </Logo>
            <Question></Question>
            <Question></Question>
            <Question></Question>
            <Question></Question>
            <Footer />
        </Container>
    )

}
const Container = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
  `;

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0; 

    h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
	}
  `

const LogoImg = styled.img`
    width: 52px;
`