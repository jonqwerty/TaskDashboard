import React from "react"
import "./styles.css"

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form action="" className="input">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter the task"
        className="input__box"
      />
      <button className="input_submit">Go</button>
    </form>
  )
}

export default InputField
