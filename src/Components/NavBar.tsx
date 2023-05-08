import React, { FC } from 'react';

import { Container, Stack, Typography } from '@mui/material';

import logo from '../Assets/egy-fix-logo.png';

export const NavBar: FC = (): JSX.Element => {
    return (
        <Stack width={'100%'} mt={1}>
            <Stack m={'0px 20px'} display={'flex'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'}>
                <Typography color={'#0355cc'} fontSize={'24px'} fontWeight={'bold'}>EGY FIX</Typography>
                {/* <img width={'80px'} height='60px' src={logo} /> */}
                <Stack width={'300px'} justifyContent={'space-between'} flexDirection={'row'}>
                    <Typography>Home</Typography>
                    <Typography>About</Typography>
                    <Typography>Contact us</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
