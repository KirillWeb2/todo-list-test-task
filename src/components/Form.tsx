import React, { FC, memo } from 'react';
import { Box, Button } from '@mui/material';
import { useInput } from '../hooks/useInput';
import { ITodo } from '../models/Todo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IForm {
    todo: ITodo[]
    setTodo: (tasks: ITodo[]) => void
};

const Form: FC<IForm> = ({ todo, setTodo }) => {
    const { text, change, clearInput } = useInput();

    const send = () => {
        setTodo(
            [...todo, {
                id: todo.length + 1,
                text,
                isCompleted: false
            }]
        )
        clearInput()
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            send()
        }
    };

    return (
        <Box className="upper__block">
            <ExpandMoreIcon
                fontSize='large'
            />
            <input
                data-testid="form-input"
                onKeyDown={onKeyDown}
                type="text"
                value={text}
                onChange={change}
                placeholder='What needs to be done?'
            />
            <button
                data-testid="form-btn"
                onClick={() => send()}
                className={"form__btn"}
                disabled={text.length < 3}
            >
                send
            </button>
        </Box>
    )
};

export default memo(Form);