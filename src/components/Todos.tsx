import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import { ITodo } from '../models/Todo'

interface ITodos {
    todo: ITodo[]
    setCompleted: (id: number) => void
}


const Todos: FC<ITodos> = ({ todo, setCompleted }) => {
    return (
        <Box className="list">
            {todo && todo.map((item: ITodo) =>
                <Box
                    key={item.id}
                    className='item'
                    onClick={() => setCompleted(item.id)}
                >
                    <Box className='item__img'>
                        {item.isCompleted && <CheckCircleOutlineOutlinedIcon color='success' fontSize='large' />}
                    </Box>
                    <Typography
                        className={`item__text ${item.isCompleted && "completed"}`}
                        variant="h5"
                    >
                        {item.text}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

export default Todos