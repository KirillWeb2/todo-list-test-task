import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";

import { useInput } from "../hooks/useInput";
import { ITodo } from "../interface/Todo";

interface IForm {
  todo: ITodo[];
  setTodo: (tasks: ITodo[]) => void;
}

export const Form: React.FC<IForm> = React.memo(({ todo, setTodo }) => {
  const { text, change, clearInput } = useInput();

  const addTask = (): void => {
    const newList = [
      ...todo,
      {
        id: todo.length + 1,
        text,
        isCompleted: false,
      },
    ];
    setTodo(newList);
    clearInput();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      addTask();
    }
  };

  return (
    <Box className="upper__block">
      <ExpandMoreIcon fontSize="large" />
      <input
        data-testid="form-input"
        onKeyDown={onKeyDown}
        type="text"
        value={text!}
        onChange={change}
        placeholder="What needs to be done?"
      />
      <button
        data-testid="form-btn"
        onClick={addTask}
        className={"form__btn"}
        disabled={text?.length < 3}
      >
        send
      </button>
    </Box>
  );
});
