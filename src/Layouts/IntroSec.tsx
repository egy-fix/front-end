import React, { FC } from 'react';
import { NavBar } from '../Components/NavBar';
import { Box } from '@mui/material';
import { IntroInfo } from '../Components/IntroInfo';

export const IntroSec: FC = (): JSX.Element => {
    return (
        <Box display={'flex'} flexDirection={'column'} sx={{ backgroundColor: '#d1e3ff' }}>
            <NavBar />
            <IntroInfo />
        </Box>
    )
}
