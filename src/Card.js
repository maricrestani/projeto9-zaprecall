import React from 'react'
import styled from 'styled-components'
import { useState } from "react"

import setaPlay from "./img/seta_play.png"
import setaTurn from "./img/seta_virar.png"
import iconCorrect from "./img/icone_certo.png"
import iconError from "./img/icone_erro.png"
import iconAlmost from "./img/icone_quase.png"

export default function Card({ index, id, question, answer, clicked, turned, closed, cardList, setCardList }) {
    let newCardList = [...cardList]

    const red = "#FF3030"
    const green = "#2FBE34"
    const orange = "#FF922E"

    let [newColor, setNewColor] = useState('')

    const answered = cardList.filter((e) => e.color !== '#333333')

    function openCard() {
        newCardList[index].clicked = true
        setCardList(newCardList)
    }

    function turnCard() {
        newCardList[index].turned = true
        setCardList(newCardList)
    }

    function error(color) {
        let openCard = 0
        newCardList.forEach((card, index) => card.turned === true ? openCard = index : '')

        newCardList[openCard].color = color
        color = (color.toString())
        setNewColor(color)

        newCardList[openCard].closed = true
        setCardList(newCardList)
    }


    function almost(color) {
        let openCard = 0
        newCardList.forEach((card, index) => card.turned === true ? openCard = index : '')

        newCardList[openCard].color = color
        color = (color.toString())
        setNewColor(color)

        newCardList[openCard].closed = true
        setCardList(newCardList)
    }

    function correct(color) {

        let openCard = 0
        newCardList.forEach((card, index) => card.turned === true ? openCard = index : '')

        newCardList[openCard].color = color
        color = (color.toString())
        setNewColor(color)

        newCardList[openCard].closed = true
        setCardList(newCardList)
    }

    console.log('só newColor fora!! ', newColor)
    console.log(typeof (newColor))

    if (!clicked && !closed) {
        return (
            <>
                <QuestionClosed data-identifier="flashcard">
                    <p>Pergunta {id}</p>
                    <img data-identifier="flashcard-show-btn" onClick={openCard} closed={closed} clicked={clicked} turned={turned} src={setaPlay} alt="" />
                </QuestionClosed>
                <FooterDiv>
                    <Container>
                        <button className="error" onClick={() => error(red)} >Não lembrei</button>
                        <button className="almost" onClick={() => almost(orange)}>Quase não lembrei</button>
                        <button className="correct" onClick={() => correct(green)}>Zap!</button>
                    </Container>
                    <span>
                        {answered.length}/{cardList.length} Concluídos
                    </span>
                </FooterDiv>
            </>
        )
    } else if (clicked && !closed) {
        return (
            <>
                <QuestionOpen data-identifier="flashcard-index-item">
                    <p>{turned ? answer : question}</p>
                    <img data-identifier="flashcard-turn-btn" onClick={turnCard} closed={closed} clicked={clicked} turned={turned} src={turned ? '' : setaTurn} alt="" />
                </QuestionOpen >
                <FooterDiv>
                    <Container>
                        <button data-identifier="forgot-btn" className="error" onClick={() => error(red)}>Não lembrei</button>
                        <button data-identifier="almost-forgot-btn" className="almost" onClick={() => almost(orange)} >Quase não lembrei</button>
                        <button data-identifier="zap-btn" className="correct" onClick={() => correct(green)} >Zap!</button>
                    </Container>
                    <span data-identifier="flashcard-counter">
                        {answered.length}/{cardList.length} Concluídos
                    </span>
                </FooterDiv>
            </>
        )
    }
    else if (closed) {
        return (
            <>
                <QuestionClosed className={newColor === '#FF3030' ? 'error' : (newColor === '#FF922E' ? 'almost' : 'correct')}  >
                    <p>Pergunta {id}</p>
                    <img data-identifier="flashcard-status" onClick={openCard} clicked={clicked} closed={closed} turned={turned} src={newColor === "#FF3030" ? iconError : (newColor === "#FF922E" ? iconAlmost : iconCorrect)} alt="" />
                </QuestionClosed>
                <FooterDiv>
                    <Container>
                        <button className="error" onClick={() => error(red)}>Não lembrei</button>
                        <button className="almost" onClick={() => almost(orange)}>Quase não lembrei</button>
                        <button className="correct" onClick={() => correct(green)}>Zap!</button>
                    </Container>
                    <span>
                        {answered.length}/{cardList.length} Concluídos
                    </span>
                </FooterDiv>
            </>
        )
    }
}

const QuestionClosed = styled.div`
width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    }

    img{
    cursor: pointer;
    }

    &.error {
        p{color: #FF3030;}
        color: #FF3030;
      text-decoration: line-through;
    }
    &.almost {
        p{color: #FF922E;}
        src: iconError;
    color: #FF922E;
    text-decoration: line-through;
    }
    &.correct {
        p{color: #2FBE34;}
    color: #2FBE34;
    text-decoration: line-through;
    }


`

const QuestionOpen = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;   


    img{
    position: absolute;
    width: 30px;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    }
`

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