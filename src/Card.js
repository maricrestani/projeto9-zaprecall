import React from 'react'
import styled from 'styled-components'
//import { useState } from "react"

import setaPlay from "./img/seta_play.png"
//import setaVirar from "./img/seta_virar.png"
//import iconeCerto from "./img/icone_certo.png"
//import iconeErro from "./img/icone_erro.png"
//import iconeQuase from "./img/icone_quase.png"

function Click(){
}

export default function Card({index,id,question,answer,clicked,closed,turned,cardList,setCardList})
{

    return (
        <>
        <QuestionDiv>
            <p>Pergunta {id}</p>
            <img onClick={Click} src={setaPlay} alt="" />
        </QuestionDiv>
        </>
    )
}


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