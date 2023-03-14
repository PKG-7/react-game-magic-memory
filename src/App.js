import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
    { src: '/img/bkb.png', matched: false },
    { src: '/img/blink.png', matched: false },
    { src: '/img/rapier.png', matched: false },
    { src: '/img/refresher.png', matched: false },
    { src: '/img/daedalus.png', matched: false },
    { src: '/img/basher.png', matched: false },
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disbled, setDisbled] = useState(false)

    // Перемешать карты
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    // handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisbled(true)

            if (choiceOne.src === choiceTwo.src) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => {
                    resetTurn()
                }, 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    console.log(cards)

    // reset choices & increase run
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns((prevTurns) => prevTurns + 1)
        setDisbled(false)
    }

    //start new game automatically
    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <div className='App'>
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className='card-grid'>
                {cards.map((card) => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disbled}
                    />
                ))}
            </div>
            <p>Turns: {turns}</p>
        </div>
    )
}

export default App
