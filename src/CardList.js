import React from 'react'
import Card from './Card'

export default function CardList({cardList, setCardList}) {

    return (
       <>
        {cardList.map((card, i) => (
            <Card
                key={i}
                index={i}
                id={card.id}
                question={card.question}
                answer={card.answer}
                clicked={card.clicked}
                turned={card.turned}
                closed={card.closed}
                cardList={cardList}
                setCardList={setCardList}
            />
        ))
        }
</>
    )
}