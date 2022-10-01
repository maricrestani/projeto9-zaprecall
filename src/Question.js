import React from 'react';
import styled from 'styled-components';
//import Decks from './Decks';

import setaPlay from "./img/seta_play.png"

function Click(){
alert("card foi clicado")
}

export default function Question() {
    return (
        <QuestionDiv>
            <p>Pergunta 1</p>
            <img onClick={Click} src={setaPlay} alt="" />
        </QuestionDiv>
    )
}

//Decks.map(`{Pergunta ${id}}`)

const QuestionDiv = styled.div`
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
/*
const AnswerDiv = styled.div`
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

    p{
        position: absolute;
    bottom: 10px;
    right: 10px;
    }
`
*/