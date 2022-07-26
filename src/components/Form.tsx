import React, { FC, memo } from 'react';
import { Box } from '@mui/material';
import { useInput } from '../hooks/useInput';
import { ITodo } from '../models/Todo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IForm {
    todo: ITodo[]
    setTodo: (tasks: ITodo[]) => void
};

const Form: FC<IForm> = ({ todo, setTodo }) => {
    const { text, change, clearInput } = useInput();

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
    };

    return (
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
    )
};

export default memo(Form);