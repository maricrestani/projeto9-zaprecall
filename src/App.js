import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './Globalstyle'
import { useState } from "react"
import CardList from './CardList'
//import Footer from './Footer'

import Deck from './Deck'

import logo from "./img/logo.png"


export default function App() {

    const [cardList, setCardList] = useState([...Deck]);

    return (
        <Container>
            <GlobalStyle />
            <Logo>
                <LogoImg src={logo} alt="" />
                <h1>ZappRecall</h1>
            </Logo>
            <CardList cardList={cardList} setCardList={setCardList}></CardList>
            
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