import React, { FC } from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';

import fixImg from '../Assets/about-img.jpg';

export const AboutUsSec: FC = (): JSX.Element => {
    return (
        <Box width={'100%'} mt={8} mb={8}>
            <Container maxWidth="lg">
                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack flexDirection={'column'}>
                        <Typography fontSize={'2rem'}>ABOUT US</Typography>
                        <Typography mb={5}>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form,
                            by injected humour.
                        </Typography>
                        <Button sx={{ backgroundColor: '#0355cc', width: 'fit-content' }} variant="contained">Read More</Button>
                    </Stack>

                    <img src={fixImg} />
                </Stack>

            </Container>
        </Box>
    )
}
