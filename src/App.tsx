import AppTodo from "./components/AppTodo"
import Navbar from "./components/Navbar"
import Todo from "./components/Todo"
import "./App.css"

function App() {

  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar/>
      <AppTodo/>
      <Todo/>
    </main>
  )
}

export default App
