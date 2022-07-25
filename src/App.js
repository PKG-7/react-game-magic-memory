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
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App