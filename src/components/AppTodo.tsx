import { FormEvent, useState } from "react"
import { useTodos } from "../store/Todos"

const AppTodo = () => {

  const [todo, setTodo] = useState("")
  const {handleAddTodo} = useTodos();

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleAddTodo(todo)
    setTodo("")

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Task" value={todo} onChange={(e) => setTodo(e.target.value)} required />
        <button type="submit">ADD</button>

      </form>
    </div>
  )
}

export default AppTodo