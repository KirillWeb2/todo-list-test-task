import React from "react";

import { Box, Typography } from "@mui/material";

import { Form } from "./components/Form";
import { Sorting } from "./components/Sorting";
import { Tasks } from "./components/Tasks";
import { ITodo } from "./interface/Todo";

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<ITodo[]>([]);
  const [parameter, setParameter] = React.useState<
    "all" | "completed" | "active"
  >("all");

  const setCompleted = React.useCallback(
    (id: number) =>
      setTodo(
        todo.map((i) =>
          i.id === id ? { ...i, isCompleted: !i.isCompleted } : i
        )
      ),
    [todo]
  );

  const clearCompleted = React.useCallback(
    () => setTodo(todo.filter((i: ITodo) => !i.isCompleted)),
    [todo]
  );

  const notMade = () => todo.filter((i: ITodo) => !i.isCompleted).length;

  const filterTasks = () => {
    if (parameter === "active" && todo) {
      return todo.filter((i: ITodo) => i.isCompleted === false);
    }
    if (parameter === "completed" && todo) {
      return todo.filter((i: ITodo) => i.isCompleted === true);
    }

    return todo;
  };

  return (
    <Box className="container">
      <Typography className="title" variant="h1">
        todos
      </Typography>
      <Box className="root">
        <Form setTodo={setTodo} todo={todo} />
        <Tasks setCompleted={setCompleted} todo={filterTasks()} />
        <Sorting
          notMade={notMade()}
          clearCompleted={clearCompleted}
          parameter={parameter}
          setParameter={setParameter}
        />
      </Box>
    </Box>
  );
};

export default App;
