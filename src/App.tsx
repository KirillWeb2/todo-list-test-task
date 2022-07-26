import React, { useCallback, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ITodo } from './models/Todo';
import Tasks from './components/Tasks';
import Sorting from './components/Sorting';
import Form from './components/Form';


const App = () => {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [parameter, setParameter] = useState<"all" | "completed" | 'active'>('all');


  const setCompleted = useCallback((id: number) => {
    setTodo(todo.map((i: ITodo) => {
      if (i.id === id) {
        return { ...i, isCompleted: true }
      } else {
        return i
      }
    }))
  }, [todo]);

  const clearCompleted = useCallback(() => setTodo(todo.filter((i: ITodo) => !i.isCompleted)), [todo]);

  const notMade = useCallback(() => todo.filter((i: ITodo) => !i.isCompleted).length, [todo]);

  const filterTasks = () => {
    if (parameter === "active" && todo) {
      return todo.filter((i: ITodo) => i.isCompleted === false)
    }
    if (parameter === "completed" && todo) {
      return todo.filter((i: ITodo) => i.isCompleted === true)
    }

    return todo
  }

  return (
    <Box className="container">
      <Typography className="title" variant="h1" >
        todos
      </Typography>
      <Box className="root">
        <Form setTodo={setTodo} todo={todo} />
        <Tasks setCompleted={setCompleted} todo={filterTasks()} />
        <Sorting notMade={notMade()} clearCompleted={clearCompleted} parameter={parameter} setParameter={setParameter} />
      </Box>
    </Box>
  )
};

export default App;
