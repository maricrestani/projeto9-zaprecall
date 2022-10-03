import React from 'react'
import styled from 'styled-components'
//import { useState } from "react"

export default function Footer({cardList, setCardList}) {
  
  const answered = cardList.filter((e) => e.color !== "#333333")

    return (
        <FooterDiv>
            <Container>
                <button className="error" onClick="">Não lembrei</button>
                <button className="almost" onClick="">Quase não lembrei</button>
                <button className="correct" onClick="">Zap!</button>
            </Container>
            <span>
         {answered.length}/{cardList.length} Concluídos
        </span>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`
const Container = styled.div`
display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

button {
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
  cursor: pointer;

    &.error {
    background-color: #FF3030;
    border: #FF3030;
    }
    &.almost {
    background-color: #FF922E;
    border: #FF922E;
    }
    &.correct {
    background-color: #2FBE34;
    border: #2FBE34;
    }

}
`