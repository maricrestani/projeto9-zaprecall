import React from 'react'
import styled from 'styled-components'
//import { useState } from "react"

import setaPlay from "./img/seta_play.png"
import setaTurn from "./img/seta_virar.png"
import iconCorrect from "./img/icone_certo.png"
import iconError from "./img/icone_erro.png"
import iconAlmost from "./img/icone_quase.png"

let classNameClosedGlobal = "";

function doNothing(){
    return;
}

function Footer(props) {

    return(
    <FooterDiv>
        <Container>
            <button className="error" onClick={() => error(props.index,props.classNameClosed,"red", "error", 1,props.newCardList,props.card,props.setCardList,props.setClassNameClosed,props.changeIcon)} >Não lembrei</button>
            <button className="almost" onClick={() => error(props.index,props.classNameClosed,"#F922E", "almost", 1,props.newCardList,props.card,props.setCardList,props.setClassNameClosed,props.changeIcon)}>Quase não lembrei</button>
            <button className="correct" onClick={() => error(props.index,props.classNameClosed,"#2FBE34", "correct", 1,props.newCardList,props.card,props.setCardList,props.setClassNameClosed,props.changeIcon)}>Zap!</button>
        </Container>
        <span> 
            {props.answered.length}/{props.cardList.length} Concluídos
        </span>
    </FooterDiv>
    )
}


function error(id,classNameClosed,color, classButton, parte,newCardList,card,setCardList,setClassNameClosed,changeIcon) {

    classNameClosedGlobal = classButton;

    let openCard = 0
    newCardList.forEach((card, index) => card.turned === true ? openCard = index : '')
    console.log('index', openCard)
    console.log(id);
    

    newCardList[openCard].color = color
    newCardList[openCard].icon = classButton;
    console.log("aqui",newCardList[openCard].icon);
    
    newCardList[openCard].closed = true;
    setCardList(newCardList)
    changeIcon(color)
    setClassNameClosed(classNameClosedGlobal);
}

export default function Card({ card, index, id, question, answer, clicked, turned, closed, icon, color, cardList, setCardList }) {
    let newCardList = [...cardList]
    let [classNameClosed, setClassNameClosed] = React.useState("");

    const red = "#FF3030";
    const orange = "#FF922E";
    const green = "#2FBE34";

    const answered = cardList.filter((e) => e.color !== '#333333')

    function openCard() {
        newCardList[index].clicked = true
        setCardList(newCardList)
    }
    
    function indiceOpenCard(){
        console.log("entra indiceOpenCard");
        for(let i= 0; i<newCardList.length; i++){
            if(newCardList[i].closed == true){
                console.log("entra");
                console.log(i);
                return i;
            }else{
                return null;
            }
        }
    }

    function turnCard() {
        newCardList[index].turned = true
        setCardList(newCardList)
    }



    function almost() {
        alert('almost')
    }

    function correct() {
        alert('correct')
    }

    function changeIcon(color) {
        console.log(color)

        if (color === '#FF3030') {
            return iconError
        } else if (color === "#FF922E") {
            return iconAlmost
        } else if (color === "#2FBE34") {
            return iconCorrect;
        }
    }


    if (!clicked && !closed) {
        return (
            <>
                <QuestionClosed>
                    <p>Perguntinha {id}</p>
                    <img onClick={openCard} closed={closed} clicked={clicked} turned={turned} src={setaPlay} alt="" />
                </QuestionClosed>
                <Footer id = {index} classNameClosed={classNameClosed} changeIcon ={changeIcon} answered={answered} cardList={cardList} newCardList={newCardList} card={card} setCardList={setCardList} setClassNameClosed={setClassNameClosed}></Footer>
            </>
        )
    } else if (clicked && !closed) {
        return (
            <>
                <QuestionOpen >
                    <p>{turned ? answer : question}</p>
                    <img onClick={turnCard} closed={closed} clicked={clicked} turned={turned} src={turned ? '' : setaTurn} alt="" />
                </QuestionOpen >
                <Footer changeIcon ={changeIcon} answered={answered} cardList={cardList} newCardList={newCardList} card={card} setCardList={setCardList} setClassNameClosed={setClassNameClosed}></Footer>
            </>
        )
    }
    else if(closed && classNameClosed==""){
      
        return (
            <>
                <QuestionClosedColored className={indiceOpenCard() !== null && newCardList[indiceOpenCard()].icon != ""? newCardList[index].icon:doNothing()}>
                    <p>Pergunta {id}</p>
                    <img onClick={openCard} clicked={clicked} closed={closed} turned={turned} color={color} src={''} alt="" />
                </QuestionClosedColored>
                <Footer changeIcon ={changeIcon} answered={answered} cardList={cardList} newCardList={newCardList} card={card} setCardList={setCardList} setClassNameClosed={setClassNameClosed}></Footer>
            </>
        )
    }


}


const QuestionClosedColored = styled.div`
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