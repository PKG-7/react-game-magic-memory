import { useState } from 'react'
import './App.css'


const cardImages = [
  { 'src': '/public/img/helmet-1.png'},
  { 'src': '/public/img/potion-1.png'},
  { 'src': '/public/img/ring-1.png'},
  { 'src': '/public/img/scroll-1.png'},
  { 'src': '/public/img/shield-1.png'},
  { 'src': '/public/img/sword-1.png'}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // Перемешать карты
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)

    console.log(cards, turns);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App