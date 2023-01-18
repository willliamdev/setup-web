import { Habit } from "./components/Habit"
import "./styles/global.css"

function App() {

  return (
    <div>
      <h3>Hello World</h3>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={8} />
      <Habit completed={4} />
    </div>
  )
}

export default App
