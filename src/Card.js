import React from 'react'
import styled from 'styled-components'
//import { useState } from "react"

import setaPlay from "./img/seta_play.png"
import setaTurn from "./img/seta_virar.png"
//import iconCorrect from "./img/icone_certo.png"
//import iconError from "./img/icone_erro.png"
//import iconAlmost from "./img/icone_quase.png"


export default function Card({ index, id, question, answer, clicked, turned, closed, cardList, setCardList }) {
    let newCardList = [...cardList]

    function openCard() {
        //alert("card clicado!")
        newCardList[index].clicked = true
        setCardList(newCardList)        
    }

    function turnCard() {
        //alert('seta virar clicada')
        newCardList[index].turned = true
        setCardList(newCardList)
        console.log("newcardlist", newCardList)
      }


    if (!clicked) {
        return (

            <QuestionClosed>
                <p>Pergunta {id}</p>
                <img onClick={openCard} clicked={clicked} src={setaPlay} alt="" />
            </QuestionClosed>
        )
    } else {
        return (
            <QuestionOpen >
                <p>{turned ? answer : question}</p>
                <img onClick={turnCard} turned={turned} src={turned ? '' : setaTurn} alt="" />
            </QuestionOpen >
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