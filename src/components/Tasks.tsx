import React from "react";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Box, Typography } from "@mui/material";

import { ITodo } from "../interface/Todo";

interface ITasks {
  todo: ITodo[];
  setCompleted: (id: number) => void;
}

export const Tasks: React.FC<ITasks> = React.memo(({ todo, setCompleted }) => {
  return (
    <Box className="list">
      {todo &&
        todo.map((item: ITodo) => (
          <Box
            key={item.id}
            className="item"
            onClick={() => setCompleted(item.id)}
          >
            <Box className="item__img">
              {item.isCompleted && (
                <CheckCircleOutlineOutlinedIcon
                  color="success"
                  fontSize="large"
                />
              )}
            </Box>
            <Typography
              className={`item__text ${item.isCompleted && "completed"}`}
              variant="h5"
            >
              {item.text}
            </Typography>
          </Box>
        ))}
    </Box>
  );
});
