import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ITodo } from './models/Todo'
import { useInput } from './hooks/useInput'
import Todos from './components/Todos'
import Sorting from './components/Sorting'


const App = () => {
  const [todo, setTodo] = useState<ITodo[]>([])
  const [parameter, setParameter] = useState<"all" | "completed" | 'active'>('all')
  const { text, change, clearInput } = useInput()


  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setTodo(
        [...todo, {
          id: todo.length + 1,
          text,
          isCompleted: false
        }]
      )
      clearInput()
    }
  }
  const filterData = (): ITodo[] => {
    if (parameter === 'all') {
      return todo
    }
    if (parameter === "active" && todo) {
      return todo.filter((i: ITodo) => i.isCompleted === false)
    }
    if (parameter === "completed" && todo) {
      return todo.filter((i: ITodo) => i.isCompleted === true)
    }

    return todo
  }
  const setCompleted = (id: number) => {
    setTodo(todo.map((i: ITodo) => {
      if (i.id === id) {
        return { ...i, isCompleted: true }
      } else {
        return i
      }
    }))
  }
  const clearCompleted = () => setTodo(todo.filter((i: ITodo) => !i.isCompleted))
  const notMade = (): number => todo.filter((i: ITodo) => !i.isCompleted).length

  return (
    <Box className="container">
      <Typography className="title" variant="h1" >
        todos
      </Typography>
      <Box className="root">
        <Box className="upper__block">
          <ExpandMoreIcon
            fontSize='large'
          />
          <input
            onKeyDown={onKeyDown}
            type="text"
            value={text}
            onChange={change}
            placeholder='What needs to be done?'
          />
        </Box>
        <Todos setCompleted={setCompleted} todo={filterData()} />
        <Sorting notMade={notMade()} clearCompleted={clearCompleted} parameter={parameter} setParameter={setParameter} />
      </Box>
    </Box>
  )
}

export default App
