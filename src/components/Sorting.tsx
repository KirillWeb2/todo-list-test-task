import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

interface ISorting {
    setParameter: (str: "all" | "completed" | 'active') => void
    parameter: string
    clearCompleted: () => void
    notMade: number
}

const Sorting: FC<ISorting> = ({ setParameter, parameter, clearCompleted, notMade }) => {
    return (
        <Box className='sorting'>
            <Typography variant="body1">
                {notMade} items left
            </Typography>
            <Box className='sorting__modes'>
                <Typography
                    onClick={() => setParameter('all')}
                    className={parameter === 'all' ? 'active' : ''}
                    variant="body1"
                >
                    All
                </Typography>
                <Typography
                    onClick={() => setParameter('active')}
                    variant="body1"
                    className={parameter === 'active' ? 'active' : ''}
                >
                    Active
                </Typography>
                <Typography
                    onClick={() => setParameter('completed')}
                    variant="body1"
                    className={parameter === 'completed' ? 'active' : ''}
                >
                    Completed
                </Typography>
            </Box>
            <Typography onClick={clearCompleted} variant="body1">
                Clear completed
            </Typography>
        </Box>
    )
}

export default Sorting