import React, { FC } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import img from '../Assets/professional-img.png';

export const ProvideSex: FC = (): JSX.Element => {
    return (
        <Box width={'100%'} pt={5} pb={5} sx={{ backgroundColor: '#d1e3ff' }}>
            <Container maxWidth="lg">
                <Stack display={"flex"} flexDirection={'row'} alignItems={'center'}>
                    <img src={img} />

                    <Stack>
                        <Typography color={'#0355cc'} fontSize={'2rem'}>WE PROVIDE PROFESSIONAL HOME SERVICES.</Typography>
                        <Typography mb={5}>
                            randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything embarrassing hidden
                            in the middle of text. All randomised words which don't look
                            even slightly
                        </Typography>

                        <Button sx={{ backgroundColor: '#0355cc', width: 'fit-content' }} variant="contained">Read More</Button>

                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
