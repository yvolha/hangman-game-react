import './App.css'
import { IncorrectGuessCounter } from './components/incorrect-quess-counter/incorrect-quess-counter.component'
import { Gallows } from './components/gallows/gallows.component'

function App() {
  const errorNumber = 5;
  return (
    <div>
      <Gallows />
      <div>
        <IncorrectGuessCounter incorrectGuessNumber={errorNumber} />
      </div>
    </div>
  )
}

export default App
