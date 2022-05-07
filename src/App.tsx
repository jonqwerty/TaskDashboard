import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import InputField from "./components/InputField"
import { Todo } from "./model"
import TodoList from "./components/TodoList"
import { DragDropContext, DropResult } from "react-beautiful-dnd"

// let name: string
// let age: number
// let house: number | string

// let isStudent: boolean
// let hobbis: string[]
// let role: [number, string]

// let country: any
// let city: unknown

// type Person = {
//   name: "string"
//   age?: "number"
// }

// let printName: (name: string) => void // returns undefined
// let printHome: (name: string) => never // returns nothing

// let person: Person

// let listOfPersons: Person[]

// //  type  vs interface

// type Man = {
//   name: "string"
//   age?: "number"
// }

// interface Woman {
//   name: "string"
//   age?: "number"
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    console.log(result)

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    let add
    let active = todos
    let complete = completedTodos
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setCompletedTodos(complete)
    setTodos(active)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Task dashboard</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  )
}

export default App
