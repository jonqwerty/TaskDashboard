import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import InputField from "./components/InputField"

let name: string
let age: number
let house: number | string

let isStudent: boolean
let hobbis: string[]
let role: [number, string]

let country: any
let city: unknown

type Person = {
  name: "string"
  age?: "number"
}

let printName: (name: string) => void // returns undefined
let printHome: (name: string) => never // returns nothing

let person: Person

let listOfPersons: Person[]

//  type  vs interface

type Man = {
  name: "string"
  age?: "number"
}

interface Woman {
  name: "string"
  age?: "number"
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")

  return (
    <div className="App">
      <span className="heading">Task dashboard</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
